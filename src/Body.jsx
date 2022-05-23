import { Component } from "react";
import { Grid } from "@mui/material";

import "./body.scss";
import * as bodySectionData from "./Constant";
import FourImage from "./Component/FourImage";
import OneImage from "./Component/OneImage";
import ProductSlider from "./Component/ProductSlider";
import ListImage from "./Component/ListImage";

class Body extends Component {
  render() {
    return (
      <div className="content-wrap">
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FourImage
                type={"Gaming accessories"}
                item={bodySectionData.GamingAccessories}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className="product-type-wrap d-flex flex-column justify-content-between ">
                <div className="product-type-name">
                  <h2>Shop by Category</h2>
                </div>
                <div
                  className="position-relative"
                  style={{
                    padding: "0 20px 46px",
                    display: "flex",
                    flexDirection: "column",
                    height: "310px",
                  }}
                >
                  <div style={{ display: "flex", height: "129px" }}>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        position: "relative",
                        margin: "1px",
                      }}
                    >
                      <div className="products-image">
                        <img src={bodySectionData.fourImg1[0].image} />
                      </div>
                      <div>
                        <span className="product-name">
                          {bodySectionData.fourImg1[0].name}
                        </span>
                      </div>
                      <a
                        style={{
                          backgroundColor: "rgba(0,164,180,.05)",
                          height: "100%",
                          left: "0",
                          position: "absolute",
                          top: " 0",
                          width: "100%",
                        }}
                      ></a>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        position: "relative",
                        margin: "1px",
                      }}
                    >
                      <div className="products-image">
                        <img src={bodySectionData.fourImg1[1].image} />
                      </div>
                      <div>
                        <span className="product-name">
                          {bodySectionData.fourImg1[1].name}
                        </span>
                      </div>
                      <a
                        style={{
                          backgroundColor: "rgba(0,164,180,.05)",
                          height: "100%",
                          left: "0",
                          position: "absolute",
                          top: " 0",
                          width: "100%",
                        }}
                      ></a>
                    </div>
                  </div>
                  <div style={{ display: "flex", height: "129px" }}>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        position: "relative",
                        margin: "1px",
                      }}
                    >
                      <div className="products-image">
                        <img src={bodySectionData.fourImg1[2].image} />
                      </div>
                      <div>
                        <span className="product-name">
                          {bodySectionData.fourImg1[2].name}
                        </span>
                      </div>
                      <a
                        style={{
                          backgroundColor: "rgba(0,164,180,.05)",
                          height: "100%",
                          left: "0",
                          position: "absolute",
                          top: " 0",
                          width: "100%",
                        }}
                      ></a>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        position: "relative",
                        margin: "1px",
                      }}
                    >
                      <div className="products-image">
                        <img src={bodySectionData.fourImg1[3].image} />
                      </div>
                      <div>
                        <span className="product-name">
                          {bodySectionData.fourImg1[2].name}
                        </span>
                      </div>
                      <a
                        style={{
                          backgroundColor: "rgba(0,164,180,.05)",
                          height: "100%",
                          left: "0",
                          position: "absolute",
                          top: " 0",
                          width: "100%",
                        }}
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="product-detail">
                  <span className="product-detail-link">
                    <a>see more</a>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"Computers & Accessories"}
                item={bodySectionData.img5}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className="signIn-conntainer">
                <div className="signIn-content">
                  <h2 className="signIn-content-text">
                    Sign in for the best experience
                  </h2>
                  <button className="signIn-content-btn">
                    Sign in securely
                  </button>
                </div>
                <div className="signIn-img">
                  <img src={bodySectionData.imgSignIn} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage type={"Lunar New Year"} item={bodySectionData.img6} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage type={"AmazonBasics"} item={bodySectionData.img7} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage type={"Electronics"} item={bodySectionData.img8} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage type={"Easy returns"} item={bodySectionData.img9} />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"Top Sellers in Books for you"}
                item={bodySectionData.topSellers1}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"International top sellers in Kitchen"}
                item={bodySectionData.topSellers2}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"Shop activity trackers and smartwatches"}
                item={bodySectionData.img10}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FourImage
                type={"Gaming accessories"}
                item={bodySectionData.ComfyStyles}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"Kindle E readers"}
                item={bodySectionData.img11}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"Shop Pet supplies"}
                item={bodySectionData.img12}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"Top Sellers in Toys for you"}
                item={bodySectionData.topSellers3}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"Popular products in PC internationally"}
                item={bodySectionData.topSellers4}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FourImage
                type={"Gaming merchandise"}
                item={bodySectionData.GamingMerchandise}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductSlider
                type={"Explore everyday essentialsy"}
                item={bodySectionData.products1}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"For your Fitness Needs"}
                item={bodySectionData.img13}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductSlider
                type={"Top Sellers in Baby Products for you"}
                item={bodySectionData.products2}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"Popular products in Beauty internationally"}
                item={bodySectionData.topSellers5}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"Top Sellers in Baby Products for you"}
                item={bodySectionData.topSellers6}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductSlider
                type={"International top sellers in Home"}
                item={bodySectionData.products3}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"Shop Laptops & Tablets"}
                item={bodySectionData.img20}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductSlider
                type={"Popular products in Apparel internationally"}
                item={bodySectionData.products4}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <OneImage
                type={"New arrivals in Toys"}
                item={bodySectionData.img21}
              />
            </Grid>
          </Grid>
        </div>
        <div className="content-item">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ListImage
                type={"International top sellers in Home Improvement"}
                item={bodySectionData.topSellers7}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Body;
