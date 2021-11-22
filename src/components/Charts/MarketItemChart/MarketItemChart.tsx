import { format } from 'date-fns';
import React, { FC } from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ChartProps, Groups } from '../../ChartCard/ChartCard';


import { useMarketItemChart } from './useMarketItemChart';

export const MarketItemChart: FC<ChartProps> = (props) => {
  const { data } = useMarketItemChart(props);

  return (
    <ComposedChart
      width={1100}
      height={510}
      data={data}
      margin={{
        top: 32,
        right: 32,
        bottom: 32,
        left: 32
      }}
    >
      <XAxis
        dataKey="Data"
        tickMargin={6}
      />
      <YAxis
        tickFormatter={(value) => Intl.NumberFormat('pt-BR', {
          notation: 'compact',
          compactDisplay: 'short'
        }).format(value)}
        tickMargin={6}
        tickCount={8}
      />
      <Tooltip
        formatter={(value: number) => Intl.NumberFormat('pt-BR', {
          maximumFractionDigits: 0
        }).format(value)}
      />
      <Legend iconType="square" />
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
