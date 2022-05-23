import "../body.scss";
import { useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function ListImage(props) {
  const [scrollValue, setScrollValue] = useState(-1);
  const productImgs = useRef();

  const handleScrollNext = () => {
    productImgs.current.scrollLeft < productImgs.current.scrollWidth
      ? (productImgs.current.scrollLeft = scrollValue + 1500)
      : (productImgs.current.scrollLeft = scrollValue);
    setScrollValue(productImgs.current.scrollLeft);
  };

  const handleScrollPrev = () => {
    productImgs.current.scrollLeft > 0
      ? (productImgs.current.scrollLeft -= 1500)
      : (productImgs.current.scrollLeft = 0);
    setScrollValue(productImgs.current.scrollLeft);
  };

  return (
    <div className="product-top-sell">
      <div className="product-type-name">
        <h2>{props.type}</h2>
      </div>
      <div className="product-img-wrap">
        <ul className="product-img-list " ref={productImgs}>
          {props.item.map((item, index) => (
            <li className="product-img-item" key={index}>
              <span>
                <a>
                  <img src={item.img} />
                </a>
              </span>
            </li>
          ))}
          <div className="product-prev" onClick={handleScrollPrev}>
            <ArrowBackIos />
          </div>
          <div className="product-next" onClick={handleScrollNext}>
            <ArrowForwardIos />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ListImage;
