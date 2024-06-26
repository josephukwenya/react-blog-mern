import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topRight">
        <i class="topSocialIcon fa-brands fa-square-facebook"></i>
        <i class="topSocialIcon fa-brands fa-square-instagram"></i>
        <i class="topSocialIcon fa-brands fa-square-x-twitter"></i>
        <i class="topSocialIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/logout" className="link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="topLeft">
        <img
          className="topImage"
          src="https://images.pexels.com/photos/7773744/pexels-photo-7773744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="top-image"
        />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
