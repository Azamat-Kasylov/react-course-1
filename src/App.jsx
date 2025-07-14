import "./App.css";
import ProfileSection from "./components/Profile/ProfileSection";
import HeaderSection from "./components/Header/HeaderSection";
import NavBarSection from "./components/NavBar/NavBarSection";
import DialogsSection from "./components/Dialogs/DialogsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderSection />
        <NavBarSection />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<ProfileSection postsData={props.postsData} />}
            />
            <Route
              path="/message"
              element={() => (
                <DialogsSection
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                />
              )}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
