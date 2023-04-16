import React from "react";
import "./displayImages.css";

// image source can be passed through props {props.srcimage1}

function DisplayImages(props) {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <h2>Reference Image</h2>
        <img
          className="image"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-735096480083361021/original/096c6749-ddda-4e99-9333-609c9c0bf040.jpeg?im_w=720"
          alt="reference"
          style={{ width: 500, height: 600 }}
        />
      </div>
      <div className="image-wrapper">
        <h2>Test Image</h2>
        <img
          className="image"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-735096480083361021/original/096c6749-ddda-4e99-9333-609c9c0bf040.jpeg?im_w=720"
          alt="test"
          style={{ width: 500, height: 600 }}
        />
      </div>
    </div>
  );
}

export default DisplayImages;
