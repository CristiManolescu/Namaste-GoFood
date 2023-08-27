import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnLog, setBtnLog] = useState("Login");
  console.log("Header rendered");

  useEffect(() => {
    console.log("btnLog si-a schimbat valoarea");
  }, [btnLog]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnLog === "Login" ? setBtnLog("Logout") : setBtnLog("Login");
            }}
          >
            {btnLog}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
