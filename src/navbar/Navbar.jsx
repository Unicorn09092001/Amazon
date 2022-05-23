import React, { Component } from "react";
import "../styleCss/navbar.scss";

import {
  Dehaze,
  LocationOn,
  Search,
  ArrowDropDown,
  AddShoppingCart,
  KeyboardArrowDown,
} from "@mui/icons-material";
import logoImg from "../image/logoImg.png";
import img1 from "../image/ImgAmercan.jpeg";
import { searchData } from "../Constant";

class Navbar extends Component {
  state = {
    isOpenModal: false,
    isOpenSearchKeys: false,
    searchKey: "All",
  };
  render() {
    return (
      <div>
        <div className="nav-belt">
          <div className="nav-belt-left">
            <div className="logo-img">
              <img src={logoImg} style={{ width: "100%" }} />
            </div>
            <div
              className="d-flex nav-belt-item"
              style={{ padding: "6px 8px" }}
              onClick={() =>
                this.setState({ isOpenModal: !this.state.isOpenModal })
              }
            >
              <div style={{ margin: "10px 0 0" }}>
                <LocationOn style={{ fontSize: "20px" }} />
              </div>
              <div>
                Deliver to
                <span className="nav-belt-item-text">Vietnam</span>
              </div>
            </div>
          </div>
          <div className="nav-belt-search">
            <div
              className="search-btn-left"
              onClick={() =>
                this.setState({
                  isOpenSearchKeys: !this.state.isOpenSearchKeys,
                })
              }
              style={{
                border: this.state.isOpenSearchKeys ? "3px solid #f3a847" : "",
              }}
            >
              <span className="btn-text">{this.state.searchKey}</span>
              <ArrowDropDown className="icon" />
            </div>
            {this.state.isOpenSearchKeys ? (
              <ul className="search-list">
                {searchData.map((data) => (
                  <li
                    key={data}
                    className="search-item"
                    onClick={(e) =>
                      this.setState({
                        searchKey: e.target.textContent,
                        isOpenSearchKeys: !this.state.isOpenSearchKeys,
                      })
                    }
                  >
                    {data}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
            <div className="search-text-field">
              <input type="text" />
            </div>
            <div className="search-btn-right">
              <Search className="icon" />
            </div>
          </div>
          <div className="nav-belt-right">
            <div className="btn-language">
              <span>
                <img src={img1} style={{ width: "24px" }} />
              </span>
              <ArrowDropDown className="icon" />
            </div>
            <div className="nav-belt-item nav-active">
              Hello, Sign in
              <span className="nav-belt-item-text">
                Account & Lists
                <ArrowDropDown className="icon" />
              </span>
              <div className="nav-signIn-modal">
                <div className="header-signIn">
                  <button className="signIn-btn">Sign in</button>
                  <span className="header-text">
                    New Customer? <a>Start here.</a>
                  </span>
                </div>
                <div className="body-signIn">
                  <ul className="signIn-list">
                    <h2 className="list-name">Your Lists</h2>
                    <li>Create a list</li>
                    <li>Find a list or Registry</li>
                    <li>AmazonSmile Charity Lists</li>
                  </ul>
                  <div
                    style={{
                      width: "0.5px",
                      margin: "0 15px 0 0",
                      background: "#e6e6e6",
                    }}
                  ></div>
                  <ul className="signIn-list">
                    <h2 className="list-name">Your Account</h2>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>Recommendations</li>
                    <li>Browsing History</li>
                    <li>Watchlist</li>
                    <li>Video Purchases & Rentals</li>
                    <li>Kindle Unlimited</li>
                    <li>Content & Devices</li>
                    <li>Subscribe & Save Items</li>
                    <li>Memberships & Subscriptions</li>
                    <li>Music Library</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-belt-item">
              Returns
              <span className="nav-belt-item-text">& Orders</span>
            </div>
            <div className="btn-shopping-cart">
              <div className="position-relative">
                <AddShoppingCart className="icon" />
                <span className="cart-count">0</span>
              </div>
              <span className="nav-belt-item-text">Cart</span>
            </div>
          </div>
        </div>
        <div className="nav-main">
          <div className="nav-main-left">
            <ul className="d-flex">
              <li className="nav-main-item">
                <Dehaze style={{ margin: "0 2px 0 0" }} />
                <span style={{ fontWeight: "600" }}>All</span>
              </li>
              <li className="nav-main-item">
                <p>
                  <span>Today's Deals</span>
                </p>
              </li>
              <li className="nav-main-item">
                <p>
                  <span>Customer Service</span>
                </p>
              </li>
              <li className="nav-main-item">
                <p>
                  <span>Registry</span>
                </p>
              </li>
              <li className="nav-main-item">
                <p>
                  <span>Gift Cards</span>
                </p>
              </li>
              <li className="nav-main-item">
                <p>
                  <span>Sell</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="nav-main-right">
            <p className="nav-main-item">
              <span>Shop Valentine's Day</span>
            </p>
          </div>
        </div>
        {this.state.isOpenModal ? (
          <div
            className="nav-modal-wrap"
            onClick={(e) => {
              if (e.target === document.querySelector(".nav-modal-wrap")) {
                this.setState({ isOpenModal: !this.state.isOpenModal });
              }
            }}
          >
            <div className="location-modal">
              <div className="header-modal">
                <h2>Choose your location</h2>
              </div>
              <div className="location-modal-content">
                <h3 className="modal-discription">
                  Delivery options and delivery speeds may vary for different
                  locations
                </h3>
                <button className="sign-btn">
                  Sign in to see your addresses
                </button>
                <p className="modal-space">
                  <span>or enter a US zip code</span>
                </p>
                <div className="modal-input">
                  <input />
                  <button className="input-btn">Apply</button>
                </div>
                <p className="modal-space">
                  <span>or</span>
                </p>
                <button className="modal-btn">
                  Vietnam
                  <KeyboardArrowDown className="icon" />
                </button>
              </div>
              <div className="location-footer-modal">
                <button
                  className="footer-btn"
                  onClick={() =>
                    this.setState({ isOpenModal: !this.state.isOpenModal })
                  }
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Navbar;
