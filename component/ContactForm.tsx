import React, { useRef } from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function sendEmail2(e: any) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_1128xjn",
      "template_dwbvoyh",
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
      <form id="form" onSubmit={sendEmail2}>
        <div className="field">
          <label htmlFor="from_name">from_name</label>
          <input type="text" name="from_name" id="from_name"></input>
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
          <label htmlFor="reply_to">reply_to</label>
          <input type="text" name="reply_to" id="reply_to"></input>
        </div>

        <input type="submit" id="button" value="Send Email"></input>
      </form>
    </>
  );
};

export default ContactForm;

//422The recipient address is empty
