import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  // const host = "http://localhost:5000";
  const host = "https://inotebook-backend-production-f63d.up.railway.app";
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  // Fetch all notes
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    // Ensure notes is always an array
    setnotes(Array.isArray(json) ? json : json.notes || []);
    console.log(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    const note = {
      _id: "68a9af66efcbcd701234abce",
      user: "68a7deb5982519dae8b153a0",
      title: title,
      description: description,
      tag: tag,
      date: "2025-08-26T10:05:42.600Z",
      __v: 0,
    };

    // Ensure notes is always an array before adding
    setnotes(Array.isArray(notes) ? [...notes, note] : [note]);
    console.log("adding a new note");
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);
    const newNote = Array.isArray(notes)
      ? notes.filter((note) => note._id !== id)
      : [];
    setnotes(newNote);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    let newNote = Array.isArray(notes) ? JSON.parse(JSON.stringify(notes)) : [];
    console.log(json);

    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setnotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setnotes, addNote, editNote, deleteNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
