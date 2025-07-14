/* eslint-disable jsx-a11y/alt-text */
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.img_wrapper}>
        <img src="https://neurotechx.github.io/studentclubs/images/unsplash_brooklyn-bridge_header.jpg" />
      </div>
      <div>
        ava + desc
        <img
          className={classes.profile_img}
          src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
