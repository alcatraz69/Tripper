import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { SubTitle, Title, Wrapper } from "./styles";


const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function HeroPage() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay={true}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Tripper</Title>
          <SubTitle>
          The journey of a thousand miles begins with a single step
          </SubTitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      {/* <MenuNav /> */}
    </HeroSlider>
  );
}
