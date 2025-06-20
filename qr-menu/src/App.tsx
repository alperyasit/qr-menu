import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./Components/Menu.scss";
import Menu from "./Components/Menu";
import SLinks from "./Components/SLinks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/s-links" element={<SLinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
