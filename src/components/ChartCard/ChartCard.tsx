import { Expand } from 'grommet-icons';
import React, { FC } from 'react';
import { ResponsiveContainer } from 'recharts';
import { Button, Card } from '@mui/material';

import { ChartContainer } from './ChartCard.styles';

export type ChartCardProps = {
  title: string;
  Chart: FC;
  children?: never;
};

export const ChartCard: FC<ChartCardProps> = ({ title, Chart }) => {
  return (
    <Card>
      <ChartContainer>
        <ResponsiveContainer>
          <Chart />
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
