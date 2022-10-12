import styled from 'styled-components';
import { Grid } from '@mui/material';

export const LeftSide = styled(Grid)(() => ({
  background: 'linear-gradient(180deg, #24477D 0%, rgba(5, 26, 57, 0.99) 100%)',
  }));
export const RightSide = styled(Grid)(() => ({
  }));

export const Title = styled(Grid)(() => ({
    font: '200 1.5rem/2rem Josefin Sans,san-serif',
    color: '#101828',
  }));

export const SubTitle = styled(Grid)(() => ({
    font: '300 1.25rem/2rem Josefin Sans,san-serif',
    color: '#fff',
  }));

export const Button = styled(Grid)(() => ({
    font: '300 1rem/2rem Josefin Sans,san-serif',
    color: '#fff',
    background: '#2B99FF',
    width: 'fit-content',
    padding: '0 1rem'
  }));