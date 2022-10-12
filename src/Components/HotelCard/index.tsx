import { Grid } from "@mui/material";
import { CardContainer, ImgContainer, MainText, SubText } from "./styles";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Chip from "@mui/material/Chip";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

function HotelCard({ hotel }: any) {
  return (
    <CardContainer container direction="column">
      <ImgContainer item>
        <img src={hotel.images[0]} alt="hotel-image" className="hotel-img" />
      </ImgContainer>
      <Grid item container direction="column" padding={2} rowGap={1}>
        <MainText item>
          {hotel?.name}
        </MainText>
        <Grid container justifyContent="space-between">
          <SubText item>{hotel?.price}/night</SubText>
          <Chip
            label="Free Breakfast"
            size="small"
            color="success"
            icon={<LunchDiningIcon />}
            variant="outlined"
            style={{ fontSize: "10px" }}
          />
        </Grid>
        <Grid container justifyContent="space-between">
          <SubText item>{hotel?.city}</SubText>
          <Rating
            name="text-feedback"
            value={hotel?.rating}
            readOnly
            precision={0.5}
            size="small"
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Grid>
      </Grid>
    </CardContainer>
  );
}

export default HotelCard;
