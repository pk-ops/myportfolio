import Education from "./Education.js";
import Work from "./Work.js";
import Programming from "./Programming.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js"
import React, { useState } from "react";
import "./styles.css";


export default function App() {

  const [education,seteducation]=useState(true);
  const [workhistory,setworkhistory]=useState(false);
  const [programming,setprogramming]=useState(false);
  const [projects,setprojects]=useState(false); 
  const[opennav,setopennav]=useState(false)

  function  SetAllFalse(){
    seteducation(false);
    setworkhistory(false);
    setprogramming(false);
    setprojects(false);
  }

  function ChangesState(function1,state1){
    SetAllFalse();
    function1(state1);
  }
   return(
<div className="App">
  <div className="navbar-option-mobile bg-new">
    <div className="d-flex flex-row justify-content-between">
      <span className="brand-name d-flex align-item-center justify-content-center">
      Prathamesh'Portfolio</span>
   
     <div className="bars mx-2" onClick={()=>setopennav(!opennav)}>
     </div>
  </div>
   </div>
<nav className={!opennav
                  ?"d-flex flex-rows bg-new px-9 py-5 navbar-new transition-all "
                  :"d-flex flex-rows bg-new px-9 py-5 navbar-fixed-new transition-all" 
                 }
  >
      <span className="brand-name"></span>
      <div className="d-flex flex-rows">
          <a href="#home" className="mx-4 nav-items"
            onClick={()=>setopennav(false)}>Home</a>
          <a href="#aboutme" className="mx-4 nav-items"
            onClick={()=>setopennav(false)}>About Me</a>
          <a href="#Projects" className="mx-4 nav-items"
            onClick={()=>setopennav(false)}>Work/Project</a>
          <a href="#contact-me" className="mx-4 nav-items"
            onClick={()=>setopennav(false)}>Contact Me</a>
      </div>
    </nav>
 <div className="hsection px-10 py-2" id="home">
   <div className="bars" onClick={()=>setopennav(!opennav)}></div> 
    <div className="hsection-2 row justify-content-center ">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="d-flex flex-column justify-content-center Im-text-section">
          <span className="Im-text"> 
             Hello, I'm <span className="name-Im-text"> Prathamesh kamble</span> 
          </span> 
            <span className="Im-text-enthusiastic py-2">
              Enthusiastic Dev 😎
          </span>
            <span className="Im-text-subheading">
              Knack of building application with front end and  back end operation
            </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a className="btn-hire-me" href="#contact-me">Hire me</a>
                  <a href="https://res.cloudinary.com/dlcmiltaj/image/upload/v1661001740/Prathamesh_s_Resume_2_wdahsq.pdf" target="_blank" className="btn-resume-me">Get Resume</a>
              </div>
            </div>
          </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex justify-content-center custom-div-outer-img">
              <img className="img-fuild cust-img" alt="himage" src="https://res.cloudinary.com/dlcmiltaj/image/upload/v1660647977/PHOTO_frrbpc.jpg" />
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>

    {/* ABout section */}
    <div className="about-me-section aboutme-inside my-5 " id="aboutme">
      <div className="d-flex flex-column">
        <span className="about-me-text">About Me</span>
        <span className="why-text-sub">Why choose me ? </span>
        <div className="row justify-content-center shadow-lg my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <lottie-player 
            className="lottie-1"
          src="https://assets7.lottiefiles.com/private_files/lf30_obidsi0t.json" 
           background="transparent"  
           speed="1"  
          //  style={{ width: "500px", height: "500px"}}  
           loop 
           autoplay
           ></lottie-player>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
            <span className="some-text-about-me">
                I'm Fresher (Engineering 2021 batch) and a passionate Full stack Developer
                certified in both front-end  and back-end technologies.
                looking for a job opportunities and am eager to join a good company to 
                showcase my skills,gain experience, and excel as a developer.
            </span>
            <span className="few-highlights" id="skills">
                 <span className="few-text d-flex align-items-center justify-content-center"><b>Skills</b></span>
                <span className="few-list d-flex ">
                  <span className="skillss">HTML</span>
                  <span className="skillss">CSS</span>
                  <span className="skillss">javascript</span>
                  <span className="skillss">React</span>
                  <span className="skillss">Node</span>
                  <span className="skillss">Express</span>
                  </span><br/>
                  <span className="few-list d-flex ">
                  
                  <span className="skillss">BootStrap</span>
                  <span className="skillss">MySQL</span>
                  <span className="skillss">MongoDB</span>
                  <span className="skillss">C</span>
                  <span className="skillss">C++</span>
                </span>
              </span>
          </div>
        </div>
      </div>
      </div>
 

      {/* Resume section */}
      <div className="resume-outer-section d-flex flex-column" id="resume">
       <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>

        <div className="resume-new-section row" 
         style={{ width: "70%", marginInline:"auto" }}
         >
        <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row"
        >
         <div className="d-flex flex-column bg-new text-white">
          <span className="icons-span">
            <i class="fa-solid fa-graduation-cap"></i>
          </span>
            <span className="icons-span">
              <i class="fa-solid fa-briefcase"></i>
            </span>
              {/* <span className="icons-span">
                <i class="fa-solid fa-code"></i>
              </span> */}
                <span className="icons-span">
                 <i class="fa-solid fa-list-check"></i>
                </span>
        </div>
        <div className="d-flex flex-column ">
          <span className={education===false
           ? "resume-options-items"
           :"selected resume-options-items"} onClick={()=>{
            ChangesState(seteducation,true)
          }}>Education</span>
          <span className={workhistory===false 
          ? "resume-options-items"
          :"selected resume-options-items"} onClick={()=>{
            ChangesState(setworkhistory,true)
          }}
          >Work</span>
          {/* <span className={programming===false 
          ? "resume-options-items"
          :"selected resume-options-items"} onClick={()=>{
            ChangesState(setprogramming,true)
          }}>Programming</span> */}
          <span className={projects===false 
          ? "resume-options-items"
          :"selected resume-options-items"} onClick={()=>{
            ChangesState(setprojects,true)
          }}>Projects</span>
        </div>
        </div>
        <div className="col-lg-8 col-md-8  resume-right-section">
              {education===true && <Education/>}
              {workhistory===true && <Work/>}
              {/* {programming === true && <Programming />} */}
              {projects===true && <Projects />}
        
         </div>  
        </div>
      </div>




        {/* contact section */}
      <div className="contact-me-part" id="contact-me">
      <div className="relative-bg">   </div>
      <div className="contact-inner-part d-flex flex-column">
        <span className="about-me-text">Contact Me</span>
        <span className="why-text-me mb-5">Lets Keep in Touch</span>
          <Contact/>
      </div>
      </div>
    </div>

)
};

