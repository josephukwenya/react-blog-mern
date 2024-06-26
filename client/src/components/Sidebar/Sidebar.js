import "./sidebar.css";

export default function Sidebar() {
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

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
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
    </div>
  );
}
