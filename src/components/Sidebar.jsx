import "../styles/Sidebar.css";

function Sidebar(props) {
  const isSelected = (tab) => {
    return tab === props.selectedTab ? "selected" : "";
  };

  const isActive = () => {
    if (props.isActive) return "active"
    return ""
  }
  return (
    <div className={`sidebar ${isActive()}`}>
      <h2>Menu</h2>
      <div className="new-todo" onClick={() => props.addNewTodo()}>
        <span>+</span><span>  Add a new todo</span>
      </div>

      <div className="topic">
        <div
          className={`topic-item ${isSelected("active")}`}
          onClick={() => props.changeTab("active")}
        >
          <span className="material-symbols-outlined">checklist</span>
          <p className="topic-item__text">Active list</p>
        </div>
        <div
          className={`topic-item ${isSelected("duesoon")}`}
          onClick={() => props.changeTab("duesoon")}
        >
          <span className="material-symbols-outlined">hourglass_empty</span>
          <p className="topic-item__text">Due soon</p>
        </div>
        <div
          className={`topic-item ${isSelected("important")}`}
          onClick={() => props.changeTab("important")}
        >
          <span className="material-symbols-outlined">star</span>
          <p className="topic-item__text">Important</p>
        </div>
        <div
          className={`topic-item ${isSelected("completed")}`}
          onClick={() => props.changeTab("completed")}
        >
          <span className="material-symbols-outlined">task_alt</span>
          <p className="topic-item__text">Completed</p>
        </div>
      </div>

      <hr />

      <div className="category">
        <p className="category-header">Categories</p>
        <div className="category-container">
          <div className="category-item">
            <span className="material-symbols-outlined">circle</span>
            <p className="category-item__text">test category</p>
          </div>
          <div className="category-item">
            <span className="material-symbols-outlined">circle</span>
            <p className="category-item__text">test category</p>
          </div>
          <div className="category-item">
            <span className="material-symbols-outlined">circle</span>
            <p className="category-item__text">test category</p>
          </div>
          <div className="category-item">
            <span className="material-symbols-outlined">circle</span>
            <p className="category-item__text">test category</p>
          </div>
          <div className="category-item">
            <span className="material-symbols-outlined">circle</span>
            <p className="category-item__text">test category</p>
          </div>
        </div>
      </div>

      <div className="settings-button">
        <span className="material-symbols-outlined">settings</span>
        <p className="setting-text">Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
