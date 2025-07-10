import classes from "./NavBarSection.module.css";
import NavBarItem from "./NavBarItem/NavBarItem";
// import { useState } from "react";

const NavBarSection = () => {
  // const [active, setActive] = useState();
  const data = [
    { title: "Profile", link: "/profile" },
    { title: "Message", link: "/message" },
    { title: "Music", link: "/music" },
    { title: "Feedback", link: "/feedback" },
    { title: "Settings", link: "/settings" },
  ];
  return (
    <nav className={classes.nav}>
      {data.map((i) => (
        <NavBarItem
          // isActive={active === i.title}
          // onClick={() => setActive(i.title)}
          title={i.title}
          link={i.link}
        />
      ))}
    </nav>
  );
};

export default NavBarSection;
