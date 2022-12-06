import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <form>
        <div>
          <label>Name : </label>
          <input type="text" placeholder="Enter Your Name..." />
        </div>
        <div>
          <label>Email : </label>
          <input type="text" placeholder="Enter Email..." />
        </div>
        <div>
          <label>Query : </label>
          <textarea placeholder="Enter Description..."> </textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
