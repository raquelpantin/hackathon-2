import "./Results.scss";
import React from "react";

const Results = ({ name }) => {
  return (
    <div className="test1">
      <div className="random">
        <img alt="EVENT IMAGE" />
        <div className="testest">
          <div className="test">
            <ul>
              <li>{name}</li>
              <li>DATE</li>
              <li>LOCATION</li>
            </ul>
          </div>
        </div>
      </div>
      <button>BUY TICKETS</button>
    </div>
  );
};

export default Results;
