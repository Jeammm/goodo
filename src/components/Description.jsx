// import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { delete_note, mark_completed } from "../services/getNotes";
import favorite_active from "../assets/favorite-active.png";
import favorite from "../assets/favorite.png";

import "../styles/Description.css";

function Description(props) {

  const des = props.des

  const tags = des.tags.map((tag) => {
    if (tag !== "") {
      return (
        <span className="tag" key={nanoid()}>
          {tag}
        </span>
      );
    }
  });

  const handleDelete = (noteId, isCompleted) => {
    delete_note(props.detailOpen[2], noteId).then(() => {
      // props.closeContent();
      if (isCompleted) props.closeContent();
      else props.changeContent(0);
    });
  };

  const handleMarkCompleted = (noteId) => {
    mark_completed(props.detailOpen[2], noteId).then(() =>
      props.closeContent()
    );
  };

  return (
    <div className={`description-side ${props.detailOpen[1] ? "show" : ""}`}>
      <div className="close-icon-container">
        <span
          className="material-symbols-outlined close-icon"
          onClick={() => props.closeContent()}
        >
          close
        </span>
      </div>
      <div className="des-detail">
        <div className="topic-header">
          <h1 className="topic-header-text">{des.name}</h1>
          <img
            src={des.isFavorite ? favorite_active : favorite}
            alt="favorite"
            className="fav-icon-des"
            onClick={props.handleToggleFavorite}
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
        <div
          className={`controller controller-complete ${
            des.isCompleted ? "hide-completed" : ""
          }`}
          onClick={() => handleMarkCompleted(props.detailOpen[3])}
        >
          <span className="material-symbols-outlined">done</span>
          <p className="controller-text">Complete</p>
        </div>

        <div className="controller controller-edit">
          <span className="material-symbols-outlined">edit_note</span>
          <p className="controller-text">Edit</p>
        </div>

        <div
          className="controller controller-delete"
          onClick={() => handleDelete(props.detailOpen[3], des.isCompleted)}
        >
          <span className="material-symbols-outlined">delete</span>
          <p className="controller-text">Delete</p>
          <small>(ขี้เกียจทำ backend)</small>
        </div>
      </div>
    </div>
  );
}

export default Description;
