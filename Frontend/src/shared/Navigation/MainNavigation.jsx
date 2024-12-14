import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <Link to="/">
        <h1 className="main-navigation__title">YourPlaces</h1>
      </Link>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
