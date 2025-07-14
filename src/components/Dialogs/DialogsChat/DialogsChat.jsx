import { NavLink } from "react-router-dom";
import classes from "./DialogsChat.module.css";

const DialogsChat = ({ isActive, name, onClick, id, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <NavLink
        className={
          isActive ? `${classes.chat} ${classes.active}` : classes.chat
        }
        onClick={onClick}
        // to={id}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogsChat;
