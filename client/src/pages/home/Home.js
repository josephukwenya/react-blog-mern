import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Posts />
      <Sidebar />
    </div>
  );
}
