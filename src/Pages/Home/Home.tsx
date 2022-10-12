import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Homeimg from "../../Assets/homeimg";
import { LeftSide, Title, SubTitle, Button, RightSide } from "./styles";

function Home() {
  return (
    <Grid container justifyContent="space-between">
      <LeftSide item xs={7} p={4}>
        <Title item>Find Your Destination</Title>
        <SubTitle item>
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
      <RightSide item xs={4}>
        <Homeimg />
      </RightSide>
    </Grid>
  );
}
export default Home;
