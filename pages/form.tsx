import NewForm from "@/component/NewForm";
import React from "react";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="/logo.svg" className="header-logo"></img>
          <NewForm></NewForm>
        </div>
      </div>
    </>
  );
};

export default Form;
