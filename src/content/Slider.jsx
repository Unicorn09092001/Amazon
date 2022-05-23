import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import slider1 from "../imgSlider/slider2.jpg";
import slider2 from "../imgSlider/slider3.jpg";
import slider3 from "../imgSlider/slider4.jpg";
import slider4 from "../imgSlider/slider1.jpg";

import "../styleCss/slider.scss";

class Slider extends Component {
  render() {
    return (
      <div className="slider-container">
        <Carousel indicators={false}>
          <Carousel.Item interval={3000}>
            <div className="slider-img">
              <img src={slider1} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="slider-img">
              <img src={slider2} alt="Second slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="slider-img">
              <img src={slider3} alt="Third slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="slider-img">
              <img src={slider4} alt="First slide" />
            </div>
          </Carousel.Item>
        </Carousel>
        <div
          style={{
            height: "420px",
            position: "absolute",
            top: "250px",
            left: "-10px",
            background: "linear-gradient(to top,#eaeded 20%, transparent 100%)",
            width: "100%",
            margin: "0 10px",
          }}
        ></div>
      </div>
    );
  }
}

export default Slider;
