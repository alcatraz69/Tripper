import { Grid } from '@mui/material'
import styled from 'styled-components'

export const CardContainer = styled(Grid)({
    minHeight: '22rem',
    width: '15rem !important',
    borderRadius: '8px',
    boxShadow: '-2px 9px 22px rgba(0, 0, 0, 0.17)'
})

export const MainText = styled(Grid)({
    font: '400 1.25rem/1.5rem Josefin sans,sans-serif'
})

export const SubText = styled(Grid)({
    font: '400 1rem/1.25rem Josefin sans,sans-serif'
})

export const ImgContainer = styled(Grid)({
    width: '100%',
    '.hotel-img':{
        width: 'webkit-fill-available',
        borderRadius: '8px',
    }
})