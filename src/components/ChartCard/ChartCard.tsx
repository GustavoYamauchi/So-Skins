import React, { FC, useState } from 'react';
import { ResponsiveContainer } from 'recharts';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import { Card, ChartContainer, Divider } from './ChartCard.styles';
import { Box } from '@mui/system';

export type ChartProps = {
  groupBy: Groups;
  period: Periods;
}

export type ChartCardProps = {
  title: string;
  Chart: FC<ChartProps>;
  children?: never;
};

export enum Groups {
  DAY = "Dia",
  WEEK = "Semana",
  MONTH = "Mês",
}

export enum Periods {
  WEEK = "Semana",
  MONTH = "Mês",
  YEAR = "Ano",
  ALL = "Desde o ínicio",
}

export const ChartCard: FC<ChartCardProps> = ({ title, Chart }) => {
  const [groupBy, setGroupBy] = useState<Groups>(Groups.DAY);
  const [period, setPeriod] = useState<Periods>(Periods.ALL);

  return (
    <Card>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Box width={280} display="flex" alignItems="center" justifyContent="space-between">
          <Box width={180} marginRight={2}>
            <FormControl fullWidth>
              <InputLabel id="groupBy">Agrupar por</InputLabel>
              <Select
                labelId="groupBy"
                value={groupBy}
                label="Agrupar por"
                onChange={(event) => setGroupBy(event.target.value as Groups)}
              >
                {Object.values(Groups).map(group => (
                  <MenuItem value={group}>{group}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <FormControl fullWidth>
            <InputLabel id="period">Período</InputLabel>
            <Select
              labelId="period"
              value={period}
              label="Período"
              onChange={(event) => setPeriod(event.target.value as Periods)}
            >
              {Object.values(Periods).map(group => (
                <MenuItem value={group}>{group}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider />
      <ChartContainer>
        <ResponsiveContainer>
          <Chart groupBy={groupBy} period={period} />
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
