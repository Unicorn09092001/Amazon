import "../body.scss";

function OneImage(props) {
  return (
    <div className="product-type-wrap d-flex flex-column justify-content-between ">
      <div className="product-type-name">
        <h2>{props.type}</h2>
      </div>
      <div className="product-image d-flex">
        <div>
          <img src={props.item} />
        </div>
      </div>
      <div className="product-detail">
        <span className="product-detail-link">
          <a>See more</a>
        </span>
      </div>
    </div>
  );
}

export default OneImage;
