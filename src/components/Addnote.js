import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

function Addnote() {
  const context = useContext(NoteContext);
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const { addNote } = context;

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="w-100 px-4" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #8a2be2 0%, #4a00e0 100%)",
            }}
          >
            <i className="fas fa-sticky-note text-white fs-4"></i>
          </div>
          <h3 className="fw-bold text-white mb-1">Create New Note</h3>
          <p className="text-white-50 small mb-0">
            Capture your thoughts and ideas
          </p>
        </div>

        {/* Full-page form */}
        <form className="w-100">
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label text-white fw-semibold"
            >
              Title
            </label>
            <input
              type="text"
              className="form-control p-3"
              id="title"
              name="title"
              onChange={onChange}
              style={{
                backgroundColor: "#2c2c2c",
                border: "1px solid #444",
                color: "white",
                borderRadius: "0.5rem",
              }}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label text-white fw-semibold"
            >
              Description
            </label>
            <textarea
              className="form-control p-3"
              id="description"
              name="description"
              rows="5"
              onChange={onChange}
              style={{
                backgroundColor: "#2c2c2c",
                border: "1px solid #444",
                color: "white",
                borderRadius: "0.5rem",
              }}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="tag" className="form-label text-white fw-semibold">
              Tag
            </label>
            <input
              type="text"
              className="form-control p-3"
              id="tag"
              name="tag"
              onChange={onChange}
              style={{
                backgroundColor: "#2c2c2c",
                border: "1px solid #444",
                color: "white",
                borderRadius: "0.5rem",
              }}
            />
          </div>

          {/* Submit button full width */}
          <div className="d-grid">
            <button
              type="submit"
              disabled={note.title.length < 5 || note.description.length < 5}
              className="btn btn-lg fw-semibold text-white border-0 shadow-sm"
              style={{
                background: "linear-gradient(90deg, #8a2be2 0%, #4a00e0 100%)",
                borderRadius: "0.5rem",
                padding: "14px 20px",
              }}
              onClick={handleClick}
            >
              <i className="fas fa-plus me-2"></i> Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addnote;
