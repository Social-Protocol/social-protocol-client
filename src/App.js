import HeaderBar from "./Components/HeaderBar/HeaderBar.js";
import Grid from "./Components/Grid/Grid.js";
import UserBar from "./Components/UserBar/UserBar.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/" element={<Grid/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
