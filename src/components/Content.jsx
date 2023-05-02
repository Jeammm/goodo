import { useState, useEffect } from "react";

import { toggleFavorite } from "../services/getNotes"

import "../styles/Content.css";
import Sidebar from "./Sidebar";
import Information from "./Information";

function Content(props) {

  const handleToggleFavorite = (category, id, fav) => {
    toggleFavorite(category, id, fav).then(() => {
      props.reloadNotes();
    })
  }

  return (
    <div className="content-container">
      <Sidebar
        className="sidebar"
        categories={props.categories}
        changeTab={props.changeTab}
        isActive={props.detailOpen[0]}
        selectedTab={props.detailOpen[2]}
        addNewTodo={props.addNewTodo}
      />
      <Information
        className="information"
        data={props.data}
        changeTab={props.changeTab}
        changeContent={props.changeContent}
        detailOpen={props.detailOpen}
        closeContent={props.closeContent}
        reloadNotes={props.reloadNotes}
        handleToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default Content;
