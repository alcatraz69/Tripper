import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Divider } from "@mui/material";

export const SearchBarContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    width: '35rem',
    border: '1px solid #e8e8e8',
    font: '400 0.9rem/1.25rem sans-serif',
    margin: 'auto',
    padding: '0.5rem 0',
    borderRadius: '10rem',
    boxShadow: '-2px 9px 22px rgba(0, 0, 0, 0.17)'
})

export const VDivider = styled(Divider)({
    borderStyle: 'solid !important',
    borderColor: 'rgb(16 139 133 / 55%) !important',
    margin: '0 1rem !important',
    height: 'auto !important',
    borderRightWidth: 'initial !important',
})

export const DatePickerWrapper = styled('div')({
    margin: 'auto',
    position: 'absolute',
    height: '100%',
    zIndex: 1,
    width: '100%',
    background: '#13131382',
    transitionDelay: '2s',
    '.rdrCalendarWrapper':{
        margin: '0 35%',
        borderRadius: '1rem'
    },
    '.guest-options':{
        margin: '0 52%'
    }
})

export const GuestOptions = styled(Grid)({
    padding: '1rem',
    background: '#fff',
    height: '10rem !important',
    width: '15rem !important',
    borderRadius: '1rem'
})

export const CounterButton = styled('button')({
    background: '#fff',
    height: '1.5rem',
    width: '1.5rem',
    textAlign: 'center',
    borderRadius: '50%',
    border: '1px solid rgb(176 176 176)',
    font: '400 1rem/1.25rem san-serif',
    cursor: 'pointer'
})

export const OptionDiv = styled('div')({
    cursor: 'pointer'
})

