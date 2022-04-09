
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import { Grid } from "@nextui-org/react";
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card5 } from './Card3';
import { Card4 } from './Card4';

function App() {
  return (
    <NextUIProvider>
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={7}>
        <Card5 />
      </Grid>
    </Grid.Container>
    </NextUIProvider>
  );
}

export default App;