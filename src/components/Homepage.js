import { useState, useEffect } from 'react';
import DisplayImage from './DisplayImage';
import ImageDrop from "./ImageDrop";
import Result from './Result';

export default function Homepage() {



  return (
    <div id="main">
      <ImageDrop />
      <DisplayImage />
      <Result />
    </div>
  );
}

