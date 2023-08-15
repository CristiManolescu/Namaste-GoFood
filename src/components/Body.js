import RestaurantCard from "./RestaurantCard";

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
          <RestaurantCard key={restaurant.key} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
