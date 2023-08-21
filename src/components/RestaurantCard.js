import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
