import "../styles/NewTodo.css";
import { useState } from "react";
import { post_note } from "../services/getNotes";

import favorite_active from "../assets/favorite-active.png";
import favorite from "../assets/favorite.png";

function NewTodo(props) {
  const [showTimeOption, setShowTimeOption] = useState(false);
  const [specificTimeOption, setSpecificTimeOption] = useState(1);

  const handleChangeTimeOption = () => {
    setShowTimeOption(!showTimeOption);
  };

  const handleChangeSpecificTimeOption = (val) => {
    setSpecificTimeOption(val);
  };

  const submitNewTodo = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const tags = document.getElementById("tags").value;
    const priority = document.getElementById("priority").value;
    const schedule = document.getElementById("schedule").checked;
    const duedate = document.getElementById("duedate").value;
    const timeOption = document
      .getElementById("time-option-selector")
      .getAttribute("value");
    const time = document.getElementById("time").value;
    const repeatOption = document.getElementById("repeat-option").value;

    const data = {
      name,
      description,
      isFavorite: false,
      isComplete: false,
      tags: tags.split(","),
      priority,
      schedule,
      due: duedate,
      timeOption,
      time,
      repeat: repeatOption,
    };

    post_note(data)
      .then((res) => {
        props.changeContent(res.id);
        props.changeTab("active");
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  return (
    <div className="description-side show">
      <div
        className="close-icon-container"
        onClick={() => props.closeContent()}
      >
        <span className="material-symbols-outlined close-icon">close</span>
      </div>
      <form onSubmit={submitNewTodo}>
        <div className="fill-in-area"></div>
        <textarea
          // type="textarea"
          name="name"
          id="name"
          placeholder="Todo name"
          required="required"
        />

        <label className="grow-1">
          <p className="label-text">Description:</p>
          <textarea
            name="description"
            id="description"
            placeholder="write your description..."
            required="required"
          />
        </label>

        <label>
          <p className="label-text">Tags</p>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="add your tags..."
            className="width-100 tag-input"
          />
        </label>

        <label>
          <select
            id="priority"
            name="priority"
            required
            aria-invalid="false"
            className="width-100"
          >
            <option value="" disabled defaultValue>
              select priority
            </option>
            <option value="high">High</option>
            <option value="high to medium">High to medium</option>
            <option value="medium">Medium</option>
            <option value="medium to low">Medium to low</option>
            <option value="low">Low</option>
          </select>
        </label>

        <label className="time-checkbox">
          <input
            type="checkbox"
            name="schedule"
            id="schedule"
            checked={showTimeOption}
            onChange={handleChangeTimeOption}
          />
          <span className="label-text">Time</span>
        </label>

        <div
          className={`schedule-options ${showTimeOption ? "show-time" : ""}`}
        >
          <label className="flex-with-gap">
            <p className="time-option-left">Due date</p>
            <input
              type="date"
              name="duedate"
              id="duedate"
              required={showTimeOption ? "required" : ""}
              className="grow-1"
            />
          </label>

          <div className="time-option-container flex-with-gap">
            <div id="time-option-selector" value={specificTimeOption}>
              <label className="radio-hide all-day-select">
                All day
                <input
                  type="radio"
                  id="allday"
                  name="time-option"
                  value="All day"
                  checked={specificTimeOption === 1}
                  onChange={() => handleChangeSpecificTimeOption(1)}
                />
              </label>

              <label className="radio-hide time-select">
                Time
                <input
                  type="radio"
                  id="time-specify"
                  name="time-option"
                  value="time"
                  checked={specificTimeOption === 2}
                  onChange={() => handleChangeSpecificTimeOption(2)}
                />
              </label>
            </div>

            <input
              type="time"
              id="time"
              name="start-time-box"
              required={specificTimeOption === 2}
              disabled={specificTimeOption === 1}
              className="grow-1"
            />
          </div>

          <label className="flex-with-gap">
            <p className="time-option-left">Repeat:</p>
            <select id="repeat-option" name="repeat-option" className="grow-1">
              <option value="no">Don't repeat</option>
              <option value="once">Once</option>
              <option value="yes">Repeat</option>
            </select>
          </label>
        </div>

        <div className="save-cancel-container">
          <div
            name="cancel-button"
            className="save-cancel-button controller-delete"
            onClick={() => props.closeContent()}
          >
            <span className="material-symbols-outlined">cancel</span>
            <div className="save-cancel-text">Cancel</div>
          </div>
          <button
            type="submit"
            name="save-button"
            className="save-cancel-button"
          >
            <span className="material-symbols-outlined">save</span>
            <div className="save-cancel-text">Savel</div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;
