import Carousel from "react-bootstrap/Carousel";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-wrapper">
      <Carousel>
        <Carousel.Item>
          <img className="banner-img" src={b1} alt="First slide" />
          <Carousel.Caption>
            <div className="banner-caption-box">
              <h5>Fashion Collection 2026</h5>
              <p>Discover the latest trends in fashion for 2026.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner-img" src={b2} alt="Second slide" />
          <Carousel.Caption>
            <div className="banner-caption-box-sale">
              <h5>Summer Sale up to 50%</h5>
              <p>Enjoy special discounts on selected products.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner-img" src={b3} alt="Third slide" />
          <Carousel.Caption>
            <div className="banner-caption-box">
              <h5>New Arrivals</h5>
              <p>Explore our newest clothing collection.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
