import classes from "./DialogsSection.module.css";
import DialogsChat from "./DialogsChat/DialogsChat";
import DialogsMessage from "./DialogsChat/DialogsMessage";
import { useState } from "react";

const DialogsSection = (props) => {
  const [active, setActive] = useState();

  return (
    <div className={classes.dialogs}>
      <div className={classes.chats}>
        {props.dialogsData.map((d) => (
          <DialogsChat
            name={d.name}
            isActive={active === d.id}
            onClick={() => setActive(d.id)}
            id={d.id}
          />
        ))}
      </div>
      <div className={classes.messages}>
        {props.messagesData.map((m) => (
          <DialogsMessage id={m.id} message={m.message} />
        ))}
      </div>
    </div>
  );
};

export default DialogsSection;
