import { format, getDate, getMonth, getUnixTime, getWeekOfMonth, getYear, isWithinInterval, previousSunday, startOfMonth, startOfWeek, sub } from 'date-fns';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { httpClient } from '../../../httpClient';
import { ChartProps, Groups, Periods } from '../../ChartCard/ChartCard';

type MarketItem = {
  id: string;
  total: string;
  byRarity: {
    rare1: string;
    rare2: string;
    rare3: string;
    rare4: string;
    rare5: string;
    rare6: string;
  },
  timestamp: string;
}

type MarketItemResponse = Array<{
  id: string;
  total: string;
  byRarity: {
    rare1: string;
    rare2: string;
    rare3: string;
    rare4: string;
    rare5: string;
    rare6: string;
  },
  timestamp: string;
}>

export const useMarketItemChart = ({ groupBy, period }: ChartProps) => {
  const [original, setOriginal] = useState<MarketItemResponse>([]);

  const getData = useCallback(async () => {
    const response = await httpClient.get(
      '/market-items'
    );

    setOriginal(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const data = useMemo(() => {
    const sorted = [...original].sort((a, b) => +a.timestamp - +b.timestamp);
    const filteredByPeriod = sorted.filter((item) => {
      const date = new Date();

      switch(period) {
        case Periods.ALL:
          return true;
        case Periods.MONTH:
          return isWithinInterval(
            new Date(+item.timestamp),
            { start: sub(date, { months: 1 }), end: date }
          );
        case Periods.WEEK:
          return isWithinInterval(
            new Date(+item.timestamp),
            { start: sub(date, { weeks: 1 }), end: date }
          );
        case Periods.YEAR:
          return isWithinInterval(
            new Date(+item.timestamp),
            { start: sub(date, { years: 1 }), end: date }
          );
      } 
    });

    const grouped = filteredByPeriod.reduce<Record<string, MarketItem>>((acc, cap) => {
      let key: string;
      if (groupBy === Groups.DAY) {
         key = cap.timestamp;
      } else if (groupBy === Groups.WEEK) {
        key = '' + getUnixTime(startOfWeek(new Date(+cap.timestamp))) * 1000;
      } else {
        key = '' + getUnixTime(startOfMonth(new Date(+cap.timestamp))) * 1000;
      }

      const totalNumeric = +cap.total;
      const currentTotal = +(acc[key]?.total) ?? 0;

      if (+currentTotal > totalNumeric) {
        return acc;
      }

      return {...acc, [key]: { ...cap, timestamp: key }}
    }, {});

    const groupedList = Object.values(grouped);

    const getDateFormat = (timestamp: number): string => {
      if (groupBy === Groups.DAY) {
        return format(new Date(timestamp), 'dd/MM/yyyy');
      } else if (groupBy === Groups.WEEK) {
        const startWeek = startOfWeek(new Date(timestamp));
        const month = getMonth(new Date(timestamp));
        const year = getYear(new Date(timestamp));

        const dayStartWeek = getDate(startWeek);

        const week = Math.ceil(dayStartWeek / 7);

        return `${week} ${month}/${year}`;
      } else {
        return format(new Date(timestamp), 'MM/yyyy');
      }
    }

    return groupedList.map((cap) => ({
      'Data': getDateFormat(+cap.timestamp),
      'Total': +cap.total,
      'Facas e luvas': +cap.byRarity.rare6,
      'Oculto': +cap.byRarity.rare5,
      'Secreto': +cap.byRarity.rare4,
      'Restrito': +cap.byRarity.rare3,
      'Nível militar': +cap.byRarity.rare2,
      'Nível industrial': +cap.byRarity.rare1
    }));
  }, [original, groupBy, period]);

  return { data };
};
