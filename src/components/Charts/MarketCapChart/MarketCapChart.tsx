import React, { FC } from 'react';
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ChartProps } from '../../ChartCard/ChartCard';


import { useMarketCapChart } from './useMarketCapChart';

export const MarketCapChart: FC<ChartProps> = (props) => {
  const { data } = useMarketCapChart(props);

  return (
    <ComposedChart
      width={1100}
      height={510}
      data={data}
    >
      <XAxis
        dataKey="Data"
        tickMargin={6}
        tick={{ fontSize: 14 }}
      />
      <YAxis
        tickFormatter={(value) => Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: "narrowSymbol",
          notation: 'compact',
          compactDisplay: 'short'
        }).format(value)}
        tickMargin={6}
        tickCount={8}
        tick={{ fontSize: 14 }}
      />
      <Tooltip
        formatter={(value: number) => Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2
        }).format(value)}
      />
      <Legend iconType="square" verticalAlign="top" height={36} />
      <Bar dataKey="Facas e luvas" stackId="a" fill="#FFD700" />
      <Bar dataKey="Oculto" stackId="a" fill="#eb4b4b" />
      <Bar dataKey="Secreto" stackId="a" fill="#d32ee6" />
      <Bar dataKey="Restrito" stackId="a" fill="#8847ff" />
      <Bar dataKey="Nível militar" stackId="a" fill="#4b69ff" />
      <Bar dataKey="Nível industrial" stackId="a" fill="#5e98d9" />
      <Line type="monotone" dataKey="Total" stroke="#1ed761" strokeWidth={4} dot={false} />
    </ComposedChart>
  );
};
