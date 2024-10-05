import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [insertNote, setInsertNote] = useState({
    title: "",
    content: "",
  });

  const [isDisplay, setDisplay] = useState(false);

  function handleInsert(event) {
    const { name, value } = event.target;
    setInsertNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleAdd(event) {
    {
      props.onAdd(insertNote);
    }
    event.preventDefault();
    setInsertNote({
      title: "",
      content: "",
    });
  }

  function handleDisplay() {
    setDisplay(true);
  }
  return (
    <div>
      <form>
        {isDisplay && (
          <input
            onChange={handleInsert}
            name="title"
            placeholder="Title"
            value={insertNote.title}
          />
        )}

        <textarea
          onClick={handleDisplay}
          onChange={handleInsert}
          name="content"
          placeholder="Take a note..."
          rows={isDisplay ? "3" : "1"}
          value={insertNote.content}
        />

        {isDisplay && (
          <button onClick={handleAdd}>
            <AddIcon />
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
