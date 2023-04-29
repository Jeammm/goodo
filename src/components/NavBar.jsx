import "../styles/NavBar.css";
import goodooLogo from "../assets/goodoo-logo.png";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="nav-item nav-item__logo-ham">
        <span
          className="material-symbols-outlined nav-item-text hamburger-menu"
          onClick={props.toggleDetail}
        >
          menu
        </span>
        <div className="nav-item nav-item__logo">
          <img className="goodoo-logo-img" src={goodooLogo} alt="goodoo logo" />
          <h2>Goodo</h2>
        </div>
      </div>

      <div className="nav-item nav-item__search-sort">
        <div className="nav-item nav-item__box nav-item__search">
          <span className="material-symbols-outlined nav-item-text">
            search
          </span>
          <input
            type="text"
            placeholder="Search todo"
            className="nav-item__box--input"
          />
        </div>

        <p className="nav-item-text">Sort by</p>
        <div className="nav-item nav-item__box nav-item__sort">
          <p className="nav-item__box--text">Priority</p>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <span className="material-symbols-outlined nav-item-text">sort</span>
      </div>

      <div className="nav-item nav-item__notification">
        <span className="material-symbols-outlined nav-item-text">
          notifications
        </span>
      </div>
    </div>
  );
}

export default NavBar;
