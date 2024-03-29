import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage';
import ImageDrop from './components/ImageDrop';
import './App.css';
import ImageSection from './components/ImageSection';
import Navbar from './components/Navbar';
import DisplayImage from './components/DisplayImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>

    {/* <ImageSection/> */}
    {/* <App/> */}
    <Homepage/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
