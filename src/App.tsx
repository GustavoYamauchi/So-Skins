import React, { FC } from 'react';
import { Container, Grid } from '@mui/material';

import { ChartCard } from './components/ChartCard/ChartCard';
import { MarketCapChart } from './components/Charts/MarketCapChart/MarketCapChart';

export const App: FC = () => (
  <Container>
    <h1>Oi</h1>
    {/* <DataGrid
      getItemKey={(item) => item.title}
      itemMinWidth="550px"
      items={[{ title: 'Cap do mercado', Chart: MarketCapChart }]}
      renderItem={(item) => <ChartCard {...item} />}
    /> */}
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ChartCard title="Cap do mercado" Chart={MarketCapChart} />
      </Grid>
    </Grid>
  </Container>
);
