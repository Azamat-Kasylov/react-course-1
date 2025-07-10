/* eslint-disable jsx-a11y/alt-text */
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png" />
        {props.value}
      </div>
      <span className="likes">like {props.likesCount}</span>
    </div>
  );
};

export default Post;
