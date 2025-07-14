/* eslint-disable jsx-a11y/alt-text */
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  const postElements = props.postsData.map((p) => (
    <Post
      id={p.id}
      name={p.name}
      message={p.message}
      likesCount={p.likesCount}
    />
  ));
  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
