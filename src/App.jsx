import "./App.css";
import ProfileSection from "./components/ProfileSection";
import HeaderSection from "./components/HeaderSection";
import NavBarSection from "./components/NavBarSection";

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
