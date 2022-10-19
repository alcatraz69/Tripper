import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Homeimg from "../../Assets/homeimg";
import { LeftSide, Title, SubTitle, Button, RightSide, Container } from "./styles";

function Home() {
  return (
    <Container container justifyContent="space-between">
      <LeftSide container item xs={6.5} p={4} direction='column' rowGap={4}>
        <Title item>Find Your Destination</Title>
        <SubTitle item textAlign='center'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </SubTitle>
        <Link to="/explore">
          <Button>
            Explore <TrendingFlatIcon />
          </Button>
        </Link>
      </LeftSide>
      <RightSide item xs>
        <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBwbGFuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </RightSide>
    </Container>
  );
}
export default Home;
