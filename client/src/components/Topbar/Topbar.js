import "./topbar.css";

export default function Topbar() {
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
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
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
