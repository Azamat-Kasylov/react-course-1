/* eslint-disable jsx-a11y/alt-text */
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={classes.posts}>
        <Post value={"abra-kadabra"} likesCount="0" />
        <Post value={"ahalai-mahalai"} likesCount="13" />
        <Post value={"sim-salabim"} likesCount="510" />
      </div>
    </div>
  );
};

export default MyPosts;
