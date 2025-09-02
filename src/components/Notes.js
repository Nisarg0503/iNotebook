import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import SectionHeader from "./SectionHeader";
import { useNavigate } from "react-router-dom";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNote, editNote } = context;
  const navigate = useNavigate(); // Fixed: call useNavigate as function

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNote();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setnote] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    console.log("editing note", note.id);
    refClose.current.click();
  };

  return (
    <>
      <Addnote />

      {/* Hidden button to trigger modal */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              border: "none",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              overflow: "hidden",
            }}
          >
            <div
              className="modal-header"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                padding: "25px 30px",
                position: "relative",
              }}
            >
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ color: "white", fontWeight: 600 }}
              >
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body" style={{ padding: "30px" }}>
              <div className="form-group mb-4">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  onChange={onChange}
                  placeholder="Enter your note title..."
                  style={{
                    borderRadius: "12px",
                    padding: "12px 16px",
                  }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  onChange={onChange}
                  rows="4"
                  placeholder="Write your note description here..."
                  style={{
                    borderRadius: "12px",
                    padding: "12px 16px",
                  }}
                />
              </div>

              <div className="form-group mb-0">
                <label htmlFor="tag">Tag</label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={onChange}
                  placeholder="Add tags..."
                  style={{
                    borderRadius: "12px",
                    padding: "12px 16px",
                  }}
                />
              </div>
            </div>

            <div
              className="modal-footer"
              style={{
                padding: "25px 30px",
                border: "none",
                justifyContent: "space-between",
              }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Edit Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes List */}
      <div className="row g-2 my-4 mx-1">
        <SectionHeader
          icon="fa-book-open"
          title="Your Notes"
          subtitle="All your saved notes in one place"
        />

        <div className="container">
          {Array.isArray(notes) && notes.length === 0 && "No notes to Display"}
        </div>
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div key={note._id} className="col-md-4">
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Notes;
