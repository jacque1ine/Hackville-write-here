import React, { useState } from "react";
import { Plate } from "@udecode/plate";
import Head from "next/head";
import Header from "@/component/Header";

const Confirmation = () => {
  const [subject, setSubject ] = useState(""); 
  async function getSubject (){
    const data = localStorage.get("parsedText") 
    const generatedSubject = await fetch("/api/subject", {
      method: "POST",
      body: JSON.stringify(data.detections[0].description),
    });
    const subjectLine = await generatedSubject.json();
    setSubject(subjectLine);
  }

  return (
    <>
      <Head>
        <title>Confirm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        ></link>
        <link rel="icon" href="/logo3.png" />
      </Head>
      <main>
        <Header />
        <div className="container">
          <Plate editableProps={{ placeholder: "Start typing here!" }} />
          <div className="container-fluid buttons">
            <button type="button" className="btns btn-no">
              <i className="bi bi-x"></i>
            </button>
            <button type="button" className="btns btn-yes">
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Confirmation;
