import "./Results.scss";
import React from "react";

const Results = ({ id, name, date, location, address, image }) => {
  return (
    <div className="test1">
      <div className="random">
        <img src={image} alt="EVENT IMAGE" />
        <div className="testest">
          <div className="test">
            <ul>
              <li>{name}</li>
              <li>{date}</li>
              <li>{location}</li>
              <li>{address}</li>
            </ul>
          </div>
        </div>
      </div>
      <button>BUY TICKETS</button>
    </div>
  );
};

export default Results;
