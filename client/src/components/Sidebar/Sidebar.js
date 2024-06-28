import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories");
        if (Array.isArray(res.data)) {
          setCats(res.data);
        } else {
          // console.error("Fetched data is not an array:", res.data);
          setCats([]);
        }
      } catch (error) {
        // console.error("Error fetching categories:", error);
        setCats([]);
      }
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImage"
          src="https://images.pexels.com/photos/7773744/pexels-photo-7773744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="About-us"
        />
        <p>
          lorem lpson lorem lpson, lorem lorem lorem lorem lorem lorem lorem,
          lorem lorem lpson.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats ? (
            cats.map((c) => (
              <Link className="link" to={`/?cat=${c.name}`} key={c._id}>
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))
          ) : (
            <li className="sidebarListItem">No categories</li>
          )}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocialIcons">
          <i className="sidebarSocialIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarSocialIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarSocialIcon fa-brands fa-square-x-twitter"></i>
          <i className="sidebarSocialIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
