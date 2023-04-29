import { useState, useEffect } from "react";
import {nanoid} from 'nanoid'

import { get_note } from "../services/getNotes";
import favorite_active from "../assets/favorite-active.png";
import favorite from "../assets/favorite.png";

import "../styles/Description.css";

function Description(props) {
  const [des, setDes] = useState({ tags: [], isFavorite: true });

  useEffect(() => {
    // console.log(props.detailOpen);
    if (props.detailOpen[3] === 0) return
    get_note(props.detailOpen[2], props.detailOpen[3])
      .then((res) => setDes(res))
      .catch(err => console.error(err));
  }, [props.detailOpen[3]]);

  // console.log(des);

  const tags = des.tags.map((tag) => {
    if (tag !== "") {
      return <span className="tag" key={nanoid()}>{tag}</span>;
    }
  });

  return (
    <div className={`description-side ${props.detailOpen[1] ? "show" : ""}`}>
      <div
        className="close-icon-container"
        onClick={() => props.closeContent()}
      >
        <span className="material-symbols-outlined close-icon">close</span>
      </div>
      <div className="des-detail">
        <div className="topic-header">
          <h1 className="topic-header-text">{des.name}</h1>
          <img
            src={des.isFavorite ? favorite_active : favorite}
            alt="favorite"
            className="fav-icon-des"
          />
        </div>

        <div className="description">
          <p className="des-header">Description:</p>
          <p className="des-text">{des.description}</p>
        </div>

        <div className="tags des-item">
          <span className="des-item-text">Tags: </span>
          {tags}
        </div>

        <div className="priority des-item">
          <span className="des-item-text">Priority: </span>
          {des.priority}
        </div>

        <div className="duedate des-item">
          <span className="des-item-text">Due date: </span>
          {des.due}
          <span className="des-item-text des-item-text__middle">Time: </span>
          {des.time}
        </div>

        <div className="repeat des-item">
          <span className="des-item-text">Repeat: </span>
          {des.repeat ? "yes" : "no"}
        </div>
      </div>
      <div className="des-controllers">
        <div className="controller controller-complete">
          <span className="material-symbols-outlined">done</span>
          <p className="controller-text">Complete</p>
        </div>
        <div className="controller controller-edit">
          <span className="material-symbols-outlined">edit_note</span>
          <p className="controller-text">Edit</p>
        </div>
        <div className="controller controller-delete">
          <span className="material-symbols-outlined">delete</span>
          <p className="controller-text">Delete</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
