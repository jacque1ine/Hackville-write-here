import React, { useRef } from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Badge } from "react-bootstrap";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

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
      <style type="text/css">
        {`   .myAlert {
          padding: 4px;
          font-size: 12px
         }
         `}
      </style>
      <Form
        onSubmit={handleSubmit((data) => {
          sendEmail(data);
        })}
      >
        <Form.Group className="mb-5">
          <Form.Label>What is your name?</Form.Label>
          <Form.Control {...register("from_name", { required: true })} />
          {errors.from_name && (
            <Alert className="myAlert" key="danger" variant="danger">
              This field is required
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>
            What is the email address you want to send the email to?
          </Form.Label>
          <Form.Control {...register("to_email", { required: true })} />
          {errors.to_email && (
            <Alert className="myAlert" key="danger" variant="danger">
              This field is required
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>What your email address?</Form.Label>
          <Form.Control {...register("reply_to", { required: true })} />
          {errors.reply_to && (
            <Alert className="myAlert" key="danger" variant="danger">
              This field is required
            </Alert>
          )}
        </Form.Group>

        <Button value="submit" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
