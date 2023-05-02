import axios from "axios";
import slugify from "slugify"
import { nanoid } from "nanoid";

const url = "http://localhost:8000";

export async function get_notes(category) {
  if (category !== "important") {
    const notes = await axios.get(`${url}/${slugify(category)}/`);
    return notes.data;
  }
  
  const notes = await axios.get(`${url}/all/`);
  // console.log(notes.data.map(note => console.log(note.isFavorite)))
  const important_note = notes.data.filter(note => note.isFavorite)
  // console.log(important_note)
  return important_note
}

export async function get_note(id) {
  const note = await axios.get(`${url}/all/${id}`);
  return note.data;
}

export async function post_note(data) {
  data.id = nanoid()
  const res = await axios.post(`${url}/active/`, data);
  await axios.post(`${url}/all/`, data)
  return res.data;
}

export async function get_active() {
  const notes = await axios.get(`${url}/active/`);
  return notes.data;
}

export async function get_soon() {
  const notes = await axios.get(`${url}/duesoon/`);
  return notes.data;
}

export async function delete_note(category, id) {
  const res = await axios.delete(`${url}/${slugify(category)}/${id}`);
  return res.data;
}

export async function toggleFavorite(category, id, fav) {
  const res = await axios.patch(`${url}/${slugify(category)}/${id}`, {
    isFavorite: fav,
  });
  return res.data;
}

export async function mark_completed(category, id) {
  const data = await get_note(category, id);
  // console.log(data)
  await axios.post(`${url}/completed/`, {...data, isCompleted: true});
  await delete_note(category, id)
  return null;
}

export async function get_categories() {
  const category = await axios.get(`${url}/category`);
  return category.data
}