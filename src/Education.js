import React from "react";
import './education.css';
export default function Education(){
  return<>
  <div className="d-flex flex-column">
    <div className="education-one my-4 justify-content-between 
      d-flex flex-row">
        <div className="d-flex flex-column new-one  ">
          <span className="university-name">
          Pune Institute of Computer Technology Pune
          </span>
           <span className="university-degree">
              Bachelors of Technology In E&TC.
          </span>
        </div>
        <div >
          <span className="year-passedout">2018-2021</span>
        </div>
      </div>
      {/* Diploma*/}
      <div className="education-one my-4 justify-content-between 
      d-flex flex-row">
        <div className="d-flex flex-column new-one  ">
          <span className="university-name">
          Cusrow Wadia Institute Of Technology
          </span>
           <span className="university-degree">
              Diploma In E&TC.
          </span>
        </div>
        <div >
          <span className="year-passedout">2015-2018</span>
        </div>
      </div>
      {/* School */}
      <div className="education-one my-4 justify-content-between 
      d-flex flex-row">
        <div className="d-flex flex-column new-one  ">
          <span className="university-name">
          Keshavrao Pawar English Medium school
          </span>
           <span className="university-degree">
              SSC board.
          </span>
        </div>
        <div >
          <span className="year-passedout">2012-2015</span>
        </div>
      </div>
  </div>
   </>;
}