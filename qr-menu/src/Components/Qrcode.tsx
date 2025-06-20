import frame from "../assets/frame.png";
import "../App.scss";

function Qrcode() {
  return (
    <div className="qrcode-container">
      <h1>Welcome To Caffeine Lane</h1>
      <img src={frame} alt="" className="transparent-qr" />
      <p>Scan to View Menu & Social Media</p>
    </div>
  );
}

export default Qrcode;
