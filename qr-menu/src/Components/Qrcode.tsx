import frame from "../assets/frame.png";
import "../App.scss";
import { Button } from "@mui/material";
import Footer from "./Footer";

function Qrcode() {
  return (
    <div className="qrcode-container">
      <h1>Welcome To Caffeine Lane</h1>
      <img src={frame} alt="" className="transparent-qr" />
      <div className="button-container">
        <h3>Or Click The Button Below</h3>
        <Button variant="contained" href="/menu">
          Use a button as a temporary option
        </Button>
      </div>
      <p style={{ fontWeight: "bold" }}>Scan to View Menu & Social Media</p>
      <Footer />
    </div>
  );
}

export default Qrcode;
