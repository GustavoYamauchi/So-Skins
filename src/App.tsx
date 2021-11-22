import React, { FC } from 'react';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';

import { ChartCard } from './components/ChartCard/ChartCard';
import { MarketCapChart } from './components/Charts/MarketCapChart/MarketCapChart';
import { MarketItemChart } from './components/Charts/MarketItemChart/MarketItemChart';

export const App: FC = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Só skins
        </Typography>
      </Toolbar>
    </AppBar>
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ChartCard title="Valor de mercado" Chart={MarketCapChart} />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Itens no mercado" Chart={MarketItemChart} />
        </Grid>
      </Grid>
    </Container>
  </>
);
