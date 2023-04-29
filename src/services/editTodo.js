export function submitNewTodo(event) {
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
  // const name = document.querySelector('[name="name"]').value
  console.log(name);
  console.log(description);
  console.log(tags);
  console.log(priority);
  console.log(schedule);
  console.log(duedate);
  console.log(timeOption);
  console.log(time);
  console.log(repeatOption);
}