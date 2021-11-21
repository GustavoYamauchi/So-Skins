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

import { useMarketCapChart } from './useMarketCapChart';

export const MarketCapChart: FC = () => {
  const { data } = useMarketCapChart();

  return (
    <ComposedChart
      width={1100}
      height={510}
      data={data}
      margin={{
        top: 64,
        right: 64,
        bottom: 64,
        left: 64
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="Data" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Facas e luvas" stackId="a" fill="#8884d8" />
      <Bar dataKey="Oculto" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Secreto" stackId="a" fill="#844a9d" />
      <Bar dataKey="Restrito" stackId="a" fill="#83219d" />
      <Bar dataKey="Oculto" stackId="a" fill="#123456" />
      <Bar dataKey="Nível militar" stackId="a" fill="#123456" />
      <Bar dataKey="Nível industrial" stackId="a" fill="#654321" />
      <Line type="monotone" dataKey="Total" stroke="#ff7300" />
    </ComposedChart>
  );
};
