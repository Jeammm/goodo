import "../styles/ActiveList.css";
import favorite_active from "../assets/favorite-active.png";
import favorite from "../assets/favorite.png";

function ActiveList(props) {
  const fav_selector = props.note.isFavorite ? favorite_active : favorite;

  return (
    <div
      className={`active-list ${props.isSelected ? "selected" : ""}`}
      onClick={() => props.changeContent(props.note.id)}
    >
      <img src={fav_selector} alt="favorite" className="fav-icon" onClick={(event) => {
        props.handleToggleFavorite()
        event.stopPropagation();
        }}/>
      <p className="active-list-text">{props.note.name}</p>
      <span className="material-symbols-outlined go-right">description</span>
    </div>
  );
}

export default ActiveList;
