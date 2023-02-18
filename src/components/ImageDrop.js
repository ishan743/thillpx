// import React, { useState } from 'react';

// function ImageDrop() {
//   const [dragging, setDragging] = useState(false);
//   const [image, setImage] = useState(null);

// // function sendimagetoBackend(){

// //   const formData = new FormData();
// //   formData.append("file", image);

// //   fetch("http://localhost:8000/api/uploadImage", {
// //     method: "POST",
// //     body: formData,
// //   })
// //   .then((response) => {
// //     console.log("Image uploaded successfully");
// //   })
// //   .catch((error) => {
// //     console.error("Error uploading image", error);
// //   });

// // }

//   const sendimagetoBackend = async (event) => {
//     const formData = new FormData();
//     formData.append('file', image);
//     const response = await fetch('http://localhost:8000/api/uploadImage', {
//       method: 'POST',
//       body: formData,
//     });
//     const data = await response.json();
//     console.log(data,"DATA is this");
//   };

//   function handleDragOver(event) {
//     event.preventDefault();
//     setDragging(true);
//   }

//   function handleDragLeave(event) {
//     event.preventDefault();
//     setDragging(false);
//   }

//   function handleDrop(event) {
//     event.preventDefault();
//     setDragging(false);
//     const file = event.dataTransfer.files[0];
//     setImage(file);
//     // const reader = new FileReader();
//     // reader.onload = () => {
//     // setImage(reader.result);
//     // };
//     // reader.readAsDataURL(file);
//   }

//   function handleFileInputChange(event) {
//     const file = event.target.files[0];
//     setImage(file);

//     // const reader = new FileReader();
//     // reader.onload = () => {
//     //   setImage(file);
//     // };
//     // reader.readAsDataURL(file);
//     sendimagetoBackend();
//   }

//   return (
//     <div>
//       <div
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//         style={{
//           border: '2px dashed #ccc',
//           borderRadius: '5px',
//           padding: '25px',
//           textAlign: 'center',
//           background: dragging ? '#eee' : 'transparent',
//         }}
//       >
//         {image ? (
//           <img src={image} alt="Dropped image" style={{ maxWidth: '100%' }} />

//         ) : (
//           <p>Drag and drop an image here, or click the button below to select a file.</p>
//         )}
//       </div>
//       <div style={{ marginTop: '20px' }}>
//         <label htmlFor="image-input">Upload Image</label>
//         <input
//           type="file"
//           id="image-input"
//           accept="image/*"
//           style={{ display: 'none' }}
//           onChange={handleFileInputChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default ImageDrop;

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
      .then((response) => {
        console.log("Image uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading image", error);
      });
  };

  return (
    <div>
      <form id="inpForm" onSubmit={handleFileUpload}>
        <div className="row">
          <div className="column">
            <p>upload figma image</p>
            {/* <label for="inputTag"> */}
              {/* Select Image */}
            <input id="inputTag" type="file" onChange={handleFileChange} required />
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
