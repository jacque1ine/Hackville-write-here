import Header from "@/component/Header";
import NewForm from "@/component/NewForm";
import React from "react";

const Form = () => {
  console.log(localStorage.getItem("subjectLine"))
  return (
    <>
      <Header />
      <NewForm></NewForm>
    </>
  );
};

export default Form;
