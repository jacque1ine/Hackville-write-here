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
  from_email: string;
};

const ContactForm = () => {
  // const { register, handleSubmit } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<FormValues> = (data: any) => console.log(data);
  // return (

  {
    /* <Form id="form"> */
  }
  {
    /* <Form id="form">
        <Form.Group className="mb-4">
          <Form.Label htmlFor="from_name">What is your name?</Form.Label>
          <Form.Control
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Enter full name"
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
          <Form.Label htmlFor="reply_to">What your email address?</Form.Label>
          <Form.Control
            type="text"
            name="reply_to"
            id="reply_to"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4 d-grid gap-2">
          <Button
            type="submit"
            id="button"
            value="Send Email"
            size="lg"
            onSubmit={sendEmail}
          >
            Submit
          </Button>
        </Form.Group>
      </Form> */
  }
  {
    /* ); */
  }
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
      from_email: data.from_email,
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
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
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
          {...register("from_email", { required: true })}
        />
        <Form.Control type="submit" />
      </Form>
    </>

    // const contactParams: any= {
    //   from_name: this.from_name,
    //   message:test,
    //   to_email: trip.traveler.email,
    //   from_email: trip.owner.email,
    // };
  );
};

export default ContactForm;
