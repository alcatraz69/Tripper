import { Grid } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function ErrorPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" direction='column' height='55vh' rowGap={2}>
      <Grid item>
        <ErrorOutlineOutlinedIcon color="secondary" fontSize="large"/>
      </Grid>
      <Grid item fontSize='1.5rem'>Error occurred while fetching hotels...</Grid>
    </Grid>
  );
}

export default ErrorPage;
