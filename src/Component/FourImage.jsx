import "../body.scss";

function FourImage(props) {
  return (
    <div className="product-type-wrap d-flex flex-column justify-content-between ">
      <div className="product-type-name">
        <h2>{props.type}</h2>
      </div>
      <div className="position-relative products-link">
        <div className="position-absolute top-0 start-0 product-link-item ">
          <div className="products-image">
            <img src={props.item[0].image} />
          </div>
          <div>
            <span className="product-name">{props.item[0].name}</span>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 product-link-item ">
          <div className="products-image">
            <img src={props.item[1].image} />
          </div>
          <div>
            <span className="product-name">{props.item[1].name}</span>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 product-link-item">
          <div className="products-image">
            <img src={props.item[2].image} />
          </div>
          <div>
            <span className="product-name">{props.item[2].name}</span>
          </div>
        </div>
        <div className="position-absolute bottom-0 end-0 product-link-item">
          <div className="products-image">
            <img src={props.item[3].image} />
          </div>
          <div>
            <span className="product-name">{props.item[2].name}</span>
          </div>
        </div>
      </div>
      <div className="product-detail">
        <span className="product-detail-link">
          <a>see more</a>
        </span>
      </div>
    </div>
  );
}

export default FourImage;
