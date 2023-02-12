import Head from "next/head";

import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';


export default function Home() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [parsedText, setParsedText] = useState("");
  const [imgSrc, setImgSrc] = React.useState("");
  const webcamRef: any = React.useRef();
  const capture = useCallback(() => {
    
    if (webcamRef && webcamRef.current) {
      const tempSrc = webcamRef.current.getScreenshot();
      setImgSrc(tempSrc);
      getParsedText(tempSrc);
      setShowButton(true);
    }
  }, [webcamRef, setImgSrc,getParsedText]);

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
    setParsedText(data.detections[0].description);
    localStorage.setItem("parsedText",data.detections[0].description);
    //router.push({pathname: "/confirmation", query: {parsedText: data.detections[0].description}});
  }
  function handleClick(){
    router.push({pathname: "/confirmation", query: {parsedText: parsedText}});
  }

  const videoConstraints = {
    facingMode: { exact: "environment" },
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 400px)' })
  const w = isTabletOrMobile ? 300 : 669;
  const l = isTabletOrMobile ? 200 : 502;
  
  return (
    <>
      <main>
        <div className="header"><img src="/logo.svg" className="header-logo"></img></div>
        <div className="container center-screen">
          <p>{parsedText}</p>
          <div className="border"><Webcam height={l} width={w} audio={false} screenshotFormat="image/jpeg" ref={webcamRef} mirrored = {false}/></div>
          <button className="btns btn-click" onClick={capture}>
            Take Photo
          </button>
          {
            //this code displays the img once taken, change as yall ui ppl see fit. 
          imgSrc && <img className="img-taken" src={imgSrc} />
          
          }
          {showButton && (
          <button className="btns btn-usephoto" onClick={handleClick}>Use Photo</button>
          )}
          </div>

      </main>
    </>
  );
}
