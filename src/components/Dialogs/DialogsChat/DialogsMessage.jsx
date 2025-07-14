import classes from "./DialogsMessage.module.css";

const DialogsMessage = ({ id, message, ...props }) => {
  return (
    <div className={classes.messages}>
      <p id={id} className={classes.message}>
        {message}
      </p>
    </div>
  );
};

export default DialogsMessage;
