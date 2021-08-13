import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="hero-mask">
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div className="hero-mask">
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div className="hero-mask">
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
