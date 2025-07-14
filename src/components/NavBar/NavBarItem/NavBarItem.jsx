import { NavLink } from "react-router-dom";
import classes from "./NavBarItem.module.css";

const NavBarItem = ({ link, title, onClick, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <NavLink
        // className={
        //   isActive ? `${classes.item} ${classes.active}` : classes.item
        // }
        className={({ isActive }) =>
          isActive ? `${classes.item} ${classes.active}` : classes.item
        }
        to={link}
        // onClick={onClick}
      >
        {title}
      </NavLink>
    </div>
  );
};

export default NavBarItem;
