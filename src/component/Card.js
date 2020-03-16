import React from "react";
import {connect} from "react-redux"
import {handlDelete} from "../Js/actions/actions"
import Rating from "./Rating";
import { Button, message } from "antd";

const Card = ({ e, handlDelete, error }) => {
  const warning = e => {
    message.warning(`You gonna edit this movie : ${e.name}`);
  };
console.log(e.id)
  return (
    <div className="movieCard flip-card" style={{ margin: "10px" }}>
      <div className="flip-card-inner">
        <div className="movieCard flip-card">
          <div>
            <img className="img" src={e.img} alt=""></img>
          </div>
          <div className="movieDesc">
            <p className="textName">
              {e.name} - {e.id}
            </p>
            <Rating minRate={e.star} />
          </div>
        </div>
        <div className="flip-card-back">
          <div className="back">
            <h4>{e.duration && `Duration: ${e.duration}`}</h4>
            <p>{e.discription && `Description: ${e.discription}`}</p>
          </div>
          <div className="cardBtn">
            <Button
              type="danger dashed"
              className="btnEdit"
              onClick={() => {handlDelete(e.id); error(e.name)}}
            >
              Delete
            </Button>
            <Button
              type="warning dashed"
              className="btnDelite"
              onClick={warning}
            >
              Edite
            </Button>
          </div>
          <div className="backcover"></div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {handlDelete})(Card);
