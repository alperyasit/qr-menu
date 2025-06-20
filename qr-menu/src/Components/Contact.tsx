import { useId } from "react";
import "./Contact.scss";
import { Button, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const contactTextAreaId = useId();
  return (
    <div className="form-container">
      <form action="mailto:alperyasit@gmail.com" method="post">
        <h3>
          <label htmlFor={contactTextAreaId}>Write your message:</label>
        </h3>
        <TextareaAutosize
          className="textarea"
          maxRows={6}
          aria-label="maximum height"
          placeholder="Write your message here..."
          defaultValue=""
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>{" "}
      </form>
    </div>
  );
}

export default Contact;
