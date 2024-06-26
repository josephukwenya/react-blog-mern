import Sidebar from "../../components/Sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <div className="settingsUpdateTitle">Update Your Account</div>
          <div className="settingsDeleteTitle">Delete Your Account</div>
        </div>
        <form className="settingsForm">
          <label>Profile Picture </label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/26146547/pexels-photo-26146547/free-photo-of-sunset-over-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Joseph" />
          <label>Email</label>
          <input type="email" placeholder="Joseph@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
