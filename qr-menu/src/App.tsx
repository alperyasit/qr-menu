import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./Components/Menu.scss";
import "./Components/Contact.scss";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Qrcode from "./Components/Qrcode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Qrcode />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
