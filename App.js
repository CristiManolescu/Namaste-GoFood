import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2023/01/Gofood-logo.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.kfc.ro/uploads/produse/smart-choice/mare_snack-box-1619164897.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Indian Restaurant" cuisine="India" />
        <RestaurantCard resName="KFC" cuisine="America" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
