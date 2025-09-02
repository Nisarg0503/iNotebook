import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <StyledWrapper>
      <div className="card">
        <div className="icon-container">
          <i
            className="fa-solid fa-pencil"
            onClick={() => updateNote(note)}
          ></i>
          <i
            className="fa-solid fa-trash"
            onClick={() => deleteNote(note._id)}
          ></i>
        </div>
        <p className="card-title">{note.title}</p>
        <p className="small-desc">{note.description}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    background: #1c1c1e; /* match AddNote background */
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem;
    max-width: 320px;
    color: #ffffff; /* white text like AddNote */
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 20px rgba(110, 63, 255, 0.5); /* subtle purple glow like button */
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: #6e3fff; /* match AddNote button purple */
  }

  .small-desc {
    font-size: 1rem;
    line-height: 1.4;
    color: #cfcfcf; /* light gray description text */
  }

  .icon-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
  }

  .fa-pencil,
  .fa-trash {
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.2s ease;
  }

  .fa-pencil {
    color: #6e3fff; /* pencil matches button */
  }
  .fa-pencil:hover {
    color: #8f5fff;
    transform: scale(1.2);
  }

  .fa-trash {
    color: #ff4d4d;
  }
  .fa-trash:hover {
    color: #ff8080;
    transform: scale(1.2);
  }
`;

export default Noteitem;
