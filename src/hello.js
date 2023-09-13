// TextEditor.js
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ onChange }) => {
  const [text, setText] = useState("");

  const handleChange = (content) => {
    setText(content);
    onChange({ text: content });
  };

  return (
    <div>
      <h2>Add Text</h2>
      <ReactQuill value={text} onChange={handleChange} />
    </div>
  );
};

export default TextEditor;
