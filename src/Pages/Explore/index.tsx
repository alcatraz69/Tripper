import { Grid, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import HotelCard from "../../Components/HotelCard/index";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ErrorPage from "../ErrorPage";

function Explore() {
  const getHotels = () => {
    return axios.get("http://localhost:4000/hotels");
  };

  const { data, isLoading, isError } = useQuery("hotels-list", getHotels);

  return (
    <Grid container direction="column" rowGap={6} py={8}>
      {/* <Grid textAlign="center">
        Explore
      </Grid> */}
      <Grid item>
        <SearchBar />
      </Grid>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="flex-start"
          xs={10}
          alignItems="center"
          margin="auto"
          gap={8}
        >
          {isLoading && Array.from(new Array(4)).map(() => <Skeleton sx={{ bgcolor: '#EFEFEF' }} animation="wave" width={240} height={550}/>)}
          {isError && <ErrorPage/>}
          {data?.data.map((item: any) => {
            return (
              <HotelCard hotel={item} mx={3} key={item?.id}>
                {item?.price}
              </HotelCard>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default Explore;
