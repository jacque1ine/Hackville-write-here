import React, { useRef } from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function sendEmail(e: any) {
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
      <Form id="form" onSubmit={sendEmail}>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="from_name">What is your name?</Form.Label>
          <Form.Control
            type="text"
            name="from_name"
            id="from_name"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control type="text" name="message" id="message"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="to_email">
            Who do you want to send your email to?
          </Form.Label>
          <Form.Control
            type="text"
            name="to_email"
            id="to_email"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="reply_to">What your email address</Form.Label>
          <Form.Control
            type="text"
            name="reply_to"
            id="reply_to"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Button type="submit" id="button" value="Send Email">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default ContactForm;

//422The recipient address is empty
