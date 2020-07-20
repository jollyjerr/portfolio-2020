import './App.css';

import React, { useEffect, useState } from 'react';

import $ from 'jquery';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import ReactGA from 'react-ga';
import Resume from './Components/Resume';

const App = (_props) => {
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
  
  useEffect(() => {
    ReactGA.initialize('UA-143938512-3');
    ReactGA.pageview(window.location.pathname);
    getResumeData();
  }, [])

  console.log(resumeData)

  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      <Portfolio data={resumeData.portfolio}/>
      <Contact data={resumeData.main}/>
      <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;
