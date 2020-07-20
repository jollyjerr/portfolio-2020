import ParticlesBg from "particles-bg";
import React from 'react';

const Header = (props) => {
    if(!props.data) {
       return React.Fragment;
    }

   const { project, github, name, description, social } = props.data

   let networks = social.map((network) => {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   })

    return (
      <header id="home">
         <ParticlesBg type="square" bg={true} num={8} />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{name}</h1>
               <h3>{description}.</h3>
               <hr />
               <ul className="social">
                  <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
                  <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
               </ul>
            </div>
         </div>

         <div className="banner">
            <ul className="social">
               {networks}
            </ul>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about">
               <i className="icon-down-circle"></i>
            </a>
         </p>
      </header>
    );
}

export default Header;
