import React from "react";
import { useSelector } from "react-redux";

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="note"
      style={{
        backgroundColor: note.isStaff ? "rgb(0,0,0,7)" : "#fff",
        color: note.isStaff ? "" : "#000",
      }}
    >
      <h4>
        Note from
        {note.isStaff ? <span> staff</span> : <span> {user.name} </span>}
      </h4>
      <p>{note.text}</p>
      <div className="note-date">
        {new Date(note.createdAt).toLocaleString("lt-LT")}
      </div>
    </div>
  );
}

export default NoteItem;
