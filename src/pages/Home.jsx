import { useState, useEffect } from "react";

import "../styles/Home.css";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
import { get_notes, get_categories } from "../services/getNotes";

function Home() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [detailOpen, setDetailOpen] = useState([true, false, "active", 0]); //sidetab, content, tabno., contentno.

  useEffect(() => {
    // console.log(detailOpen[2])
    get_notes(detailOpen[2]).then((data) => setNotes(data));
    get_categories().then((data) => setCategories(data));
  }, [detailOpen[2], detailOpen[3]]);

  const reloadNotes = () => {
    get_notes(detailOpen[2]).then((data) => setNotes(data));
  };

  const fetchNotes = (fn) => {
    //update active list
    setNotes(fn);
  };

  const toggleDetail = () => {
    //toggle the most-left panel
    setDetailOpen((prev) => {
      return [!prev[0], prev[1], prev[2], prev[3]];
    });
  };

  const changeTab = (tab) => {
    //change tab on most-left side
    setDetailOpen((prev) => {
      return [prev[0], prev[1], tab, prev[3]];
    });
  };

  const addNewTodo = () => {
    //open add-new-todo panel on most-right side
    // console.log('yo')
    setDetailOpen((prev) => {
      return [prev[0], true, prev[2], 0];
    });
  };

  const closeContent = () => {
    //close most-right side content
    // console.log(detailOpen)
    setDetailOpen((prev) => {
      return [prev[0], false, prev[2], 0];
    });
  };

  const changeContent = (content) => {
    //change content on most-right side
    setDetailOpen((prev) => {
      if (content === prev[3]) return [prev[0], !prev[1], prev[2], 0];
      else return [prev[0], true, prev[2], content];
    });
  };

  return (
    <main className="main">
      backend is suck so I left it here
      <NavBar toggleDetail={toggleDetail} />
      <Content
        data={notes}
        categories={categories}
        changeContent={changeContent}
        changeTab={changeTab}
        detailOpen={detailOpen}
        closeContent={closeContent}
        addNewTodo={addNewTodo}
        reloadNotes={reloadNotes}
      />
    </main>
  );
}

export default Home;
