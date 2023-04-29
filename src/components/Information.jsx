import "../styles/Information.css";
import ActiveList from "./ActiveList";
import Description from "./Description";
import NewTodo from "./NewTodo";

import { nanoid } from "nanoid";

function Information(props) {
  const isSelected = (contentId) => {
    return contentId === props.detailOpen[3];
  };

  const tabName = (tab) => {
    if (tab === "active") return "Active List";
    if (tab === "duesoon") return "Due soon";
    if (tab === "important") return "Important";
    if (tab === "completed") return "Completed";

    return "Other";
  };

  const ActiveListComponents = props.data.map((note) => {
    return (
      <ActiveList
        key={nanoid()}
        note={note}
        id={note.id}
        isSelected={isSelected(note.id)}
        changeContent={props.changeContent}
      />
    );
  });

  return (
    <div className="information">
      <div className="list-side">
        <h2 className="active-list-header">{tabName(props.detailOpen[2])}</h2>
        {ActiveListComponents.length ? ActiveListComponents :
          <div className="no-item-here">
            
            There is nothing here...
          </div>
        }
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
        />
      )}
    </div>
  );
}

export default Information;
