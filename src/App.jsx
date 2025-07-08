import "./App.css";
import ProfileSection from "./components/Profile/ProfileSection";
import HeaderSection from "./components/Header/HeaderSection";
import NavBarSection from "./components/NavBar/NavBarSection";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderSection />
      <NavBarSection />
      <ProfileSection />
    </div>
  );
};

export default App;
console.log("Hello");
