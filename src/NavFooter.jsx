import { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Language,
  ArrowDropDown,
  ArrowDropUp,
  ArrowBackIos,
  ArrowForwardIos,
  ArrowBackIosNew,
} from "@mui/icons-material";
import { Carousel } from "react-bootstrap";
import { linkItems, footerItems } from "./Constant";
import logoImg from "./image/logoImg.png";
import americanFlagImg from "./image/ImgAmercan.jpeg";
import { webHistory } from "./Constant";
import "./footer.scss";

class NavFooter extends Component {
  state = {
    pageHistory: 1,
  };

  render() {
    return (
      <>
        <div className="history-container">
          <div className="history-slider">
            <div className="history-header">
              <h2 className="history-header-name">
                Inspired by your browsing history
              </h2>
              <span>
                Page {this.state.pageHistory} of {webHistory.length}
              </span>
            </div>
            <div className="history-slider-wrap">
              <Carousel
                indicators={false}
                interval={null}
                prevIcon={<ArrowBackIosNew />}
                nextIcon={<ArrowForwardIos />}
              >
                {webHistory.map((page, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex history-list">
                      {page.map((pageItem, index) => (
                        <div key={index} className="histoty-product-item">
                          <div>
                            <img src={pageItem.img} />
                          </div>
                          <h2 className="product-name">{pageItem.name}</h2>
                          <div className="product-rate">
                            <div className="start-rate"></div>
                            <span>{pageItem.rate}</span>
                          </div>
                          {pageItem.labelProduct ? (
                            <div className="product-label">
                              <img src={pageItem.labelProduct} />
                              <span>{pageItem.address}</span>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="product-price">
                            <span className="icon">$</span>
                            {pageItem.price}
                            <span className="retail-price">
                              {pageItem.retailPrice}
                            </span>
                            <div className="ship-price">
                              {pageItem.shipPrice} shipping
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="SignIn-wrap">
            <h3 className="SignIn-text">See personalized recommendations</h3>
            <button className="SignIn-btn">Sign in</button>
            <p className="SignIn-link">
              New customer
              <a>Start here</a>
            </p>
          </div>
        </div>
        <div className="nav-footer" style={{ top: {} }}>
          <a href="#">
            <div className="back-to-top-btn">
              <span>Back to top</span>
            </div>
          </a>
          <div
            style={{
              backgroundColor: "#232f3e",
              borderBottom: "solid 1px #384351",
            }}
          >
            <div className="nav-footer-lists d-flex justify-content-between">
              {footerItems.map((footerItem, index) => (
                <div key={index} className="nav-list">
                  <h3 className="nav-list-name">{footerItem.name}</h3>
                  <ul>
                    {footerItem.elements.map((item, index) => (
                      <li key={index} className="nav-list-item">
                        <a href="#">
                          <span>{item.element}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-btns-wrap">
            <div style={{ width: "68px", margin: "0 70px 0 0" }}>
              <img src={logoImg} style={{ width: "100%" }} />
            </div>
            <div className="d-flex">
              <div className="footer-btn">
                <Language style={{ fontSize: "15px" }} />
                <span>English</span>
              </div>
              <div className="footer-btn">
                <div style={{ fontSize: "15px" }}>$</div>
                <span>USD - U.S. Dollar</span>
              </div>
              <div className="footer-btn">
                <img src={americanFlagImg} style={{ width: "18px" }} />
                <span>United States</span>
              </div>
            </div>
          </div>
          <div className="nav-footer-list">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650, maxWidth: 1000 }}
                aria-label="simple table"
              >
                <TableBody>
                  {linkItems.map((linkItem, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      {linkItem.map((item, index) => (
                        <TableCell align="left" key={index}>
                          <a href="#">
                            <div className="footer-link">
                              <h3 className="footer-item-name">{item.name}</h3>
                              <h4 className="footer-item-disc">
                                {item.discription}
                              </h4>
                            </div>
                          </a>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="nav-footer-link">
            <a href="#" className="nav-footer-link-item">
              Conditions of Use
            </a>
            <a href="#" className="nav-footer-link-item">
              Privacy Notice
            </a>
            <a href="#" className="nav-footer-link-item">
              Interest-Based Ads
            </a>
            <span className="nav-footer-item">
              © 1996-2022, Amazon.com, Inc. or its affiliates
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default NavFooter;
