import { useState, useEffect } from "react";

import "../styles/Content.css";
import Sidebar from "./Sidebar";
import Information from "./Information";

function Content(props) {
  return (
    <div className="content-container">
      <Sidebar
        className="sidebar"
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
      />
    </div>
  );
}

export default Content;
