/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";
import classes from "./Post.module.css";

const Post = ({ id, name, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png" />
        <div className={classes.inner_wrapper}>
          <NavLink className={classes.name}>{name}</NavLink>
          <p className={classes.message} id={id}>
            {props.message}
          </p>
        </div>
      </div>
      <span className={classes.likes}>likes: {props.likesCount}</span>
    </div>
  );
};

export default Post;
