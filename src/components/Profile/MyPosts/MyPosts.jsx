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
        <Post value={"abra-kadabra"} />
        <Post value={"ahalai-mahalai"} />
        <Post value={"sim-salabim"} />
      </div>
    </div>
  );
};

export default MyPosts;
