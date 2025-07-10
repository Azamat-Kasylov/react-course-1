import "./App.css";
import ProfileSection from "./components/Profile/ProfileSection";
import HeaderSection from "./components/Header/HeaderSection";
import NavBarSection from "./components/NavBar/NavBarSection";
import DialogsSection from "./components/Dialogs/DialogsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderSection />
        <NavBarSection />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileSection />} />
            <Route path="/message" element={<DialogsSection />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
