import classes from "./NavBarItem.module.css";

const NavBarItem = (props) => {
  return (
    <div>
      <a className={classes.item} href={props.link}>
        {props.title}
      </a>
    </div>
  );
};

export default NavBarItem;
