import styled from "styled-components";

export const Title = styled('h1')({
  font: "500 4rem/3rem Josefin Sans,san-serif",
  color: "#fff",
  width: '100%',
  textAlign: 'center',
  padding: "0",
  textShadow: '1px 1px 5px rgba(0,0,0,0.61)',
});

export const SubTitle = styled('h1')({
  font: "500 2rem/2.5rem Josefin Sans,san-serif",
  color: "#fff",
  textAlign: 'center',
  width: '100%',
  padding: 0,
  fontSize: "1.75rem",
  textShadow: '1px 1px 5px rgba(0,0,0,0.61)',
})

export const Wrapper = styled('div')({
  position: 'absolute',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  gap: '1.2rem',
  zIndex: '2',
  // marginRight: '4rem',
});


export const Container = styled.div`
    width: "100%",
    height: "calc(100vh - 3rem)",
    margin: 0,
    padding: 0,
`

export const MaskOverlay = styled('div')({
  position: 'absolute',
  top: '3.9rem',
  left: 0,
  width: '100%',
  height: 'calc(100vh - 3rem)',
  // zIndex: 3,
  pointerEvents: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.15)'
})