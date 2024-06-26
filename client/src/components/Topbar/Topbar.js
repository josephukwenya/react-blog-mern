import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topRight">
        <i className="topSocialIcon fa-brands fa-square-facebook"></i>
        <i className="topSocialIcon fa-brands fa-square-instagram"></i>
        <i className="topSocialIcon fa-brands fa-square-x-twitter"></i>
        <i className="topSocialIcon fa-brands fa-linkedin"></i>
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
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topLeft">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/7773744/pexels-photo-7773744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="top-image"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
