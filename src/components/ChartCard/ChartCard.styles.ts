import styled from 'styled-components';
import { Card as MuiCard, Divider as MuiDivider } from '@mui/material';

export const ChartContainer = styled.div`
  width: 100%;
  height: 510px;
`;

export const Card = styled(MuiCard)`
  padding: 32px;
`

export const Divider = styled(MuiDivider)`
  margin: 16px 0px;
`;
