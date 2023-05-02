import "../styles/Information.css";
import ActiveList from "./ActiveList";
import Description from "./Description";
import NewTodo from "./NewTodo";
import {useState, useEffect} from "react"
import {get_note} from "../services/getNotes"
import { nanoid } from "nanoid";

function Information(props) {

  const [des, setDes] = useState({ tags: [], isFavorite: true });

  useEffect(() => {
    // console.log(props.detailOpen);
    if (props.detailOpen[3] === 0) return;
    get_note(props.detailOpen[3])
      .then((res) => setDes(res))
      .catch((err) => console.error(err));
  }, [props.detailOpen[3]]);

  const fetchNewDes = (id) => {
    if (id !== des.id) return;
    setDes(prev => {
      const newDes = {...prev, isFavorite:!prev.isFavorite}
      return newDes
    })
  }

  const isSelected = (contentId) => {
    return contentId === props.detailOpen[3];
  };

  const tabName = (tab) => {
    if (tab === "active") return "Active List";
    if (tab === "duesoon") return "Due soon";
    if (tab === "important") return "Important";
    if (tab === "completed") return "Completed";

    return tab;
  };

  const ActiveListComponents = props.data.map((note) => {
    return (
      <ActiveList
        key={nanoid()}
        note={note}
        id={note.id}
        isSelected={isSelected(note.id)}
        changeContent={props.changeContent}
        handleToggleFavorite={() => {
          props.handleToggleFavorite(props.detailOpen[2], note.id, !note.isFavorite)
          fetchNewDes(note.id);
        }
          
        }
      />
    );
  });

  return (
    <div className="information">
      <div className="list-side">
        <h2 className="active-list-header">{tabName(props.detailOpen[2])}</h2>
        {ActiveListComponents.length ? (
          ActiveListComponents
        ) : (
          <div className="no-item-here">There is nothing here...</div>
        )}
      </div>

      {props.detailOpen[3] === 0 && props.detailOpen[1] ? (
        <NewTodo
          changeContent={props.changeContent}
          changeTab={props.changeTab}
          closeContent={props.closeContent}
        />
      ) : (
        <Description
          detailOpen={props.detailOpen}
          closeContent={props.closeContent}
          changeContent={props.changeContent}
          des={des}
          handleToggleFavorite={() => {
            props.handleToggleFavorite(props.detailOpen[2], des.id, !des.isFavorite)
            fetchNewDes(des.id);
          }}
        />
      )}
    </div>
  );
}

export default Information;
