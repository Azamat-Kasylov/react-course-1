import classes from "./NavBarSection.module.css";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBarSection = () => {
  return (
    <nav className={classes.nav}>
      <NavBarItem title={"Profile"} link={"#profile"} />
      <NavBarItem title={"Message"} link={"#message"} />
      <NavBarItem title={"Music"} link={"#music"} />
      <NavBarItem title={"Settings"} link={"#settings"} />
    </nav>
  );
};

export default NavBarSection;
