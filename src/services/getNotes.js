import axios from "axios";

const url = "http://localhost:8000"

export async function get_notes(category) {
  const notes = await axios.get(`${url}/${category}/`)
  return notes.data
}

export async function get_note(category, id) {
  const note = await axios.get(`${url}/${category}/${id}`)
  return note.data
}

export async function post_note(data) {
  const res = await axios.post(`${url}/active/`, data)
  return res.data
}
export async function get_active() {
  const notes = await axios.get(`${url}/active/`)
  return notes.data
}

export async function get_soon() {
  const notes = await axios.get(`${url}/duesoon/`)
  return notes.data
}