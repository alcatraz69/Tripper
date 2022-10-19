import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Container = styled(Grid)(() => ({
  // height: 'calc(100vh - 3rem)',
  justifyContent: 'center',
  alignItems: 'center'
  }));

export const LeftSide = styled(Grid)(() => ({
  background: 'linear-gradient(180deg, #24477D 0%, rgba(5, 26, 57, 0.99) 100%)',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 3rem)'
  }));
export const RightSide = styled(Grid)(() => ({
 'img':{
  objectfFit: 'cover',
  height: '100%',
 }
  }));

export const Title = styled(Grid)(() => ({
    font: '500 2.5rem/2rem Josefin Sans,san-serif',
    color: '#fff',
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