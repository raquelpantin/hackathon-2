import "./Results.scss";
import React from "react";

const Results = ({ id, name, date, location, address, image }) => {
  return (
    <div className="affairs__container">
      <div className="affairs__container-top">
        <img className="affairs__image" src={image} alt="EVENT IMAGE" />
        <div className="affairs__container-bottom">
          <div className="affairs__card">
            <ul className="affairs__list">
              <li className="affairs__list-item--name">{name}</li>
              <li className="affairs__list-item">{date}</li>
              <li className="affairs__list-item">{location}</li>
              <li className="affairs__list-item">{address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="affairs__button-container">
        <button className="affairs__button">BUY TICKETS</button>
      </div>
    </div>
  );
};

export default Results;
