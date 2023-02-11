import React, { useRef } from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// const btn = useRef(null);
// const btn = document.getElementById("button");
//const [btnLoading, setbtnLoading] = useState("Send Email");

//THIS IS DIFF
// const form = useRef<HTMLFormElement>(null);

// const sendEmail = (e: any) => {
//   e.preventDefault();
//   setbtnLoading("Loading...");

//   const serviceID = "default_service";
//   const templateID = "template_rbkpcb9";

//   emailjs
//     .sendForm(serviceID, templateID, form.current, "your public key here")
//     .then(
//       () => {
//         setbtnLoading("Send Email");
//         alert("Sent!");
//       },
//       (err: any) => {
//         setbtnLoading("Send Email");
//         alert(JSON.stringify(err));
//       }
//     );
// };

function sendEmail2(e: any) {
  e.preventDefault();
  // console.log(form.current);
  emailjs
    .sendForm(
      "service_1128xjn",
      "template_rbkpcb9",
      e.target,
      "RTKXEoUG3NUwuirJi"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

const ContactForm = () => {
  return (
    <>
      <div className="container">
        <form onSubmit={sendEmail2}>
          <div className="field">
            <label htmlFor="subject">subject</label>
            <input type="text" name="subject" id="subject"></input>
          </div>

          <div className="field">
            <label htmlFor="message">message</label>
            <input type="text" name="message" id="message"></input>
          </div>

          <div className="field">
            <label htmlFor="to_email">to_email</label>
            <input type="text" name="to_email" id="to_email"></input>
          </div>

          <div className="field">
            <label htmlFor="from_name">from_name</label>
            <input
              type="text"
              name="from
            _name"
              id="from_name"
            ></input>
          </div>

          <div className="field">
            <label htmlFor="from_email">from_email</label>
            <input type="text" name="from_email" id="from_email"></input>
          </div>

          <div className="field">
            <label htmlFor="reply_to">reply_to</label>
            <input type="text" name="reply_to" id="reply_to"></input>
          </div>
          {/* <input type="submit" id="button" value={"test"}></input> */}
          <input type="submit" id="button" value={"test"}></input>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
