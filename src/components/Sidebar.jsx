import "../styles/Sidebar.css";

function Sidebar(props) {
  const isSelected = (tab) => {
    return tab === props.selectedTab ? "selected" : "";
  };

  const categories = props.categories.map((cat) => {
    return (
      <div
        className={`category-item ${
          props.isActive ? "" : "not-active"
        } ${isSelected(cat.name)}`}
        onClick={() => props.changeTab(cat.name)}
      >
        <svg height="12" width="12">
          <circle cx="6" cy="6" r="5" stroke="black" strokeWidth="2" fill={cat.color} />
        </svg>
        <p className="category-item__text">{`${cat.name}`}</p>
      </div>
    );
  });

  return (
    <div
      className={`sidebar ${props.isActive ? "sidebar-container-active" : ""}`}
    >
      <h2 className={`menu-header ${props.isActive ? "" : "hide-menu-text"}`}>
        Menu
      </h2>

      <div
        className={`new-todo ${props.isActive ? "" : "not-active"}`}
        onClick={() => props.addNewTodo()}
      >
        <span>+</span>
        <p className={props.isActive ? "" : "not-active"}> Add a new todo</p>
      </div>

      <div className="topic">
        <div
          className={`topic-item ${isSelected("active")} ${
            props.isActive ? "" : "not-active"
          }`}
          onClick={() => props.changeTab("active")}
        >
          <span className="material-symbols-outlined">checklist</span>
          <p className="topic-item__text">Active list</p>
        </div>
        <div
          className={`topic-item ${isSelected("duesoon")} ${
            props.isActive ? "" : "not-active"
          }`}
          onClick={() => props.changeTab("duesoon")}
        >
          <span className="material-symbols-outlined">hourglass_empty</span>
          <p className="topic-item__text">Due soon</p>
        </div>
        <div
          className={`topic-item ${isSelected("important")} ${
            props.isActive ? "" : "not-active"
          }`}
          onClick={() => props.changeTab("important")}
        >
          <span className="material-symbols-outlined">star</span>
          <p className="topic-item__text">Important</p>
        </div>
        <div
          className={`topic-item ${isSelected("completed")} ${
            props.isActive ? "" : "not-active"
          }`}
          onClick={() => props.changeTab("completed")}
        >
          <span className="material-symbols-outlined">task_alt</span>
          <p className="topic-item__text">Completed</p>
        </div>
      </div>

      <hr />

      <div className="category">
        <p
          className={`category-header ${
            props.isActive ? "" : "hide-menu-text"
          }`}
        >
          Categories
        </p>
        <div className="category-container">{categories}</div>
      </div>

      <div className={`settings-button ${props.isActive ? "" : "not-active"}`}>
        <span className="material-symbols-outlined">settings</span>
        <p className="setting-text">Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
