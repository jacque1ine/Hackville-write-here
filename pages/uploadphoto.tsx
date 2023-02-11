import Head from "next/head";
import { Inter } from "@next/font/google";
import React, { useState, useEffect, useReducer, useRef } from "react";
import Webcam from "react-webcam";
import Link from "next/link";

export default function Home() {
  const [parsedText, setParsedText] = useState("write:here (placeholder text)");

  async function getParsedText(file: any) {
    const index = file.indexOf(",") + 1;
    const imgData = file.substring(index);

    const response = await fetch("/api/vision", {
      method: "POST",
      body: JSON.stringify(imgData),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    const editedResponse = await fetch("/api/spellcheck", {
      method: "POST",
      body: JSON.stringify(data.detections[0].description),
    });
    const editedData = await editedResponse.json();
    console.log(editedData);
    setParsedText(editedData.data);
  }

  function saveFile(e: any) {
    e.preventDefault();
    const reader = new FileReader();
    const imgUrl = e.target.dataFile.files[0];
    reader.readAsDataURL(imgUrl);
    reader.onload = () => {
      const base64 = reader.result;

      if (base64) {
        getParsedText(base64);
      }
    };
  }

  return (
    <>
      <Head>
        <title>Upload Photo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <p>{parsedText}</p>
          <form onSubmit={saveFile}>
            <input
              type="file"
              id="dataFile"
              name="dataFile"
              accept="image/png, image/jpg, image/jpeg"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
