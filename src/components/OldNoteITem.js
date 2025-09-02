import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../context/notes/NoteContext";

const OldNoteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <StyledWrapper>
      <div className="card">
        <p className="card-title">{note.title}</p>
        <p className="small-desc">{note.description}</p>
        <div className="icon-container">
          <i
            className="fa-solid fa-pencil fa-shake"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
          <i
            className="fa-solid fa-trash fa-bounce"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    max-width: 300px;
    max-height: 320px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(28);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }

  .icon-container {
    position: absolute;
    top: 1em;
    right: 1em;
    display: flex;
    gap: 1.5em;
    z-index: 1;
  }

  .fa-pencil {
    color: #364a60;
    font-size: 1.2em;
    cursor: pointer;
    animation: none;
  }

  .fa-pencil:hover {
    animation: shake 0.6s ease-in-out 1;
  }

  .card:hover .fa-pencil {
    color: #ffffff;
    transition: all 0.5s ease-out;
  }

  .fa-trash {
    color: #364a60;
    font-size: 1.2em;
    cursor: pointer;
    z-index: 1;
    animation: none;
  }

  .fa-trash:hover {
    animation: bounce 0.6s ease-in-out;
  }

  .card:hover .fa-trash {
    color: #ffffff;
    transition: all 0.5s ease-out;
  }

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    40%,
    43% {
      transform: translate3d(0, -8px, 0);
    }
    70% {
      transform: translate3d(0, -4px, 0);
    }
    90% {
      transform: translate3d(0, -2px, 0);
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-2px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(2px);
    }
  }
`;

export default OldNoteitem;
