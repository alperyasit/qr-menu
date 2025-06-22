import { useId } from "react";
import "./Contact.scss";
import { Button, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Footer from "./Footer";

function Contact() {
  const contactTextAreaId = useId();
  return (
    <div className="contact-container">
      <div className="form-container">
        <form action="mailto:alperyasit@gmail.com" method="post">
          <h3>
            <label htmlFor={contactTextAreaId}>
              Your suggestions are valuable to us.
            </label>
          </h3>
          <TextareaAutosize
            className="textarea"
            maxRows={6}
            aria-label="maximum height"
            placeholder="Write your message here..."
            defaultValue=""
          />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
      <div className="button-container">
        <Button variant="contained" href="/menu">
          Back to Menu
        </Button>
        <Button variant="contained" href="/">
          Back to Qr Code
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
