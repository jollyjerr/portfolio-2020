import './App.css';

import React, { useEffect, useState } from 'react';

import $ from 'jquery';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Portfolio from './Components/Portfolio';
import ReactGA from 'react-ga';
import Resume from './Components/Resume';

// eslint-disable-next-line
const RSSParser = require('rss-parser/dist/rss-parser.min.js');


// eslint-disable-next-lin
let parser = new RSSParser();

const App = (_props) => {
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  const [climbs, setClimbs] = useState([]);
  const [resumeData, setResumeData] = useState({})

  const getResumeData = () => {
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: (data) => {
        setResumeData(data)
      },
      error: function(_xhr, _status, err){
        console.log(err);
      }
    });
  }

  const getClimbs = () => {
    parser
      .parseURL(
        CORS_PROXY + "https://www.mountainproject.com/rss/user-ticks/200244605"
      )
      .then(feed => setClimbs(feed))
      .catch(console.log);
  };
  
  useEffect(() => {
    ReactGA.initialize('UA-143938512-3');
    ReactGA.pageview(window.location.pathname);
    getResumeData();
    getClimbs();
  }, [])

  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      {/* <Portfolio data={resumeData.portfolio}/> */}
      <Contact data={resumeData.main} climbs={climbs}/>
      <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;
