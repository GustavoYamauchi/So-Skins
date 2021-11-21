import { format } from 'date-fns';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { httpClient } from '../../../httpClient';

type MarketCapResponse = Array<{
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

export const useMarketCapChart = () => {
  const [blah, setBlah] = useState<MarketCapResponse>([]);

  const getData = useCallback(async () => {
    const response = await httpClient.get(
      '/market-caps'
    );

    setBlah(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const data = useMemo(() => {
    return blah.map((cap) => {
      return {
        'Data': format(+cap.timestamp, 'dd/MM/yyyy'),
        'Total': +cap.total,
        'Facas e luvas': +cap.byRarity.rare6,
        'Oculto': +cap.byRarity.rare5,
        'Secreto': +cap.byRarity.rare4,
        'Restrito': +cap.byRarity.rare3,
        'Nível militar': +cap.byRarity.rare2,
        'Nível industrial': +cap.byRarity.rare1
      }
    })
  }, [blah]);

  console.log(data);

  return { data };
};
