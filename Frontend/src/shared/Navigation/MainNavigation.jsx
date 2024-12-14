import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu=btn">
        <span />
        <span />
        <span />
      </button>
      <Link to="/">
        {" "}
        <h1 className="main-navigation__title">YOur Places...</h1>
      </Link>
      <nav>nav links</nav>
    </MainHeader>
  );
};

export default MainNavigation;
