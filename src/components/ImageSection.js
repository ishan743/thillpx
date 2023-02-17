import React from "react";
import ImageDrop from "./ImageDrop";
export default function ImageSection() {
  function sendlinktoBackend() {
    let link = document.getElementById("inpLink").value;
    console.log(link);
    fetch("http://localhost:8000/api/uploadLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: link }),
    })
      .then((response) => {
        console.log("link uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading link", error);
      });
  }
  return (
    <>
      <div className="row">
        <div className="column">
          <h1>upload figma design</h1>
          <ImageDrop />
        </div>
        <div className="column">
          <h1>upload html design</h1>
          {/* <ImageDrop/> */}
          <input
            type={"text"}
            id="inpLink"
            width={"100%"}
            placeholder={"enter url "}
          />
          <button onClick={sendlinktoBackend}>Upload</button>
        </div>
      </div>
    </>
  );
}
