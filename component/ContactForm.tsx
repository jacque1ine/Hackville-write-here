import React, { useRef } from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, SubmitHandler } from "react-hook-form";
type FormValues = {
  from_name: string;
  message: string;
  to_email: string;
  reply_to: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function sendEmail(data: any) {
    console.log("send email called");
    const contactParams: any = {
      from_name: data.from_name,
      message: "hello there",
      to_email: data.to_email,
      reply_to: data.reply_to,
    };

    console.log("this is contact params");
    console.log(contactParams);

    emailjs
      .send(
        "service_1128xjn",
        "template_dwbvoyh",
        contactParams,
        "RTKXEoUG3NUwuirJi"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <>
      <Form
        onSubmit={handleSubmit((data) => {
          sendEmail(data);
        })}
        id="myForm"
      >
        <Form.Label>What is your name?</Form.Label>
        <Form.Control
          className="mb-4"
          {...register("from_name", { required: true })}
        />

        <Form.Label>
          What is the email address you want to send the email to?
        </Form.Label>
        <Form.Control
          className="mb-4"
          {...register("to_email", { required: true })}
        />
        <Form.Label>What your email address?</Form.Label>
        <Form.Control
          className="mb-4"
          {...register("reply_to", { required: true })}
        />
        <Button value="submit" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
