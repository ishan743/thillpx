import React, { useState } from "react";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [testUrl, setTestUrl] = useState(null);

  const handleFileChange = (event) => {
    console.log("handle file change executed");
    setFile(event.target.files[0]);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    let link = document.getElementById("inpLink").value;
    const formData = new FormData();
    formData.append("file", file);

    fetch(`http://localhost:8000/api/uploadImage?link=${link}`, {
      method: "POST",
      body: formData,
    })
      .then(
        (response) => {
          return response.json();
        },
        (error) => {
          console.log(error);
        }
      )
      .then((res) => {
        console.log({ res });
      });
  };

  return (
    <div className="body">
      <form id="inpForm" onSubmit={handleFileUpload}>
        <div className="row">
          <div className="column">
            <p>Upload Figma Design</p>
            <input
              id="inputTag"
              type="file"
              onChange={handleFileChange}
              required
            />
            {/* <input id="inputTag" type="file" /> */}
            {/* </label> */}
          </div>
          <div className="column">
            <p>upload test image url</p>
            <input
              type={"text"}
              id="inpLink"
              width={"100%"}
              placeholder={"Enter Url"}
              required
            />
          </div>
          <div className="column">
            <button type="submit">Upload and Compare Results</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ImageUpload;
