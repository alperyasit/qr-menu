import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./Components/Menu.scss";
import Menu from "./Components/Menu";
import SLinks from "./Components/SLinks";
import Qrcode from "./Components/Qrcode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/qrcode" element={<Qrcode />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/s-links" element={<SLinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
