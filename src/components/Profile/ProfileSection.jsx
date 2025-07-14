/* eslint-disable jsx-a11y/alt-text */
import classes from "./ProfileSection.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileSection = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default ProfileSection;
