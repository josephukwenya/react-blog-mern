import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">Blog App</span>
        <img className="headerImg" alt="" />
      </div>
    </div>
  );
}
