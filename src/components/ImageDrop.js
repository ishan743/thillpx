import React, { useState } from "react";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [imageurl, setimageurl] = useState(
    "https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png"
  );
  const [secondImage, setsecondImage] = useState(
    "https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png"
  );
  const [testUrl, setTestUrl] = useState(null);

  const handleFileChange = (event) => {
    console.log("handle file change executed");
    setFile(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setimageurl(url);
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
        // console.log({ res });
        // console.log("res testimage:" + res.testImage);
        // setsecondImage(res.testImage);
        console.log(res.results.testImage);
        console.log(typeof res.results.testImage);
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
      <div>
        <div className="image-container">
          <img src={imageurl} className="image-column" />
          <img src={secondImage} className="image-column" />
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
