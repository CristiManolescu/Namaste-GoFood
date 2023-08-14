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
const imgLink =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={imgLink + resData.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    id: "25620",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Intermediate Ring Road",
    areaName: "Ejipura",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.1,
    sla: {
      deliveryTime: 14,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "14 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "25621",
    name: "Dominos Pizza",
    cloudinaryImageId: "vw6n5betlssnqelt7rmu",
    locality: "Intermediate Ring Road",
    areaName: "Ejipura",
    costForTwo: "₹571 for two",
    cuisines: ["Pizza"],
    avgRating: 3.7,
    sla: {
      deliveryTime: 14,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "14 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "25622",
    name: "Cristi Burger",
    cloudinaryImageId: "r4ufflqojich0r29efvc",
    locality: "Intermediate Ring Road",
    areaName: "Ejipura",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "American", "Fast Food"],
    avgRating: 4.1,
    sla: {
      deliveryTime: 14,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "14 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
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
