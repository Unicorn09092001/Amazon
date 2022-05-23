import "../body.scss";
import { Carousel } from "react-bootstrap";

function ProductSlider(props) {
  return (
    <div className="product-type-wrap d-flex flex-column justify-content-between ">
      <div className="product-type-name">
        <h2>{props.type}</h2>
      </div>
      <div className="product-img-list">
        <Carousel indicators={false} variant="dark" style={{ height: "100%" }}>
          {props.item.images.map((image, index) => (
            <Carousel.Item
              interval={200000}
              key={index}
              className="position-relative"
              style={{ height: "100%" }}
            >
              <div className="position-absolute img-left">
                <img
                  src={
                    index === 0
                      ? props.item.images[props.item.images.length - 1].img
                      : props.item.images[index - 1].img
                  }
                  alt="First slide"
                />
              </div>
              <div className="position-absolute img-center">
                <img src={props.item.images[index].img} alt="First slide" />
              </div>
              <div className="position-absolute img-right">
                <img
                  src={
                    index === props.item.images.length - 1
                      ? props.item.images[0].img
                      : props.item.images[index + 1].img
                  }
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="product-info">
        <div className="product-discription">{props.item.discription}</div>
        <span className="product-price">
          <span className="price-whole">
            <span className="price-icon">$</span>
            {props.item.price.whole}
            <span className="price-fraction">{props.item.price.fraction}</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProductSlider;
