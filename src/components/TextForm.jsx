import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [textHistory, setTextHistory] = useState([]);

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    saveToHistory();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    saveToHistory();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClear = () => {
    saveToHistory();
    setText('');
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClick = () => {
    const textArea = document.getElementById('myBox');
    textArea.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!", "success");
  };

  const handleRemoveSpacesClick = () => {
    const newText = text.replace(/\s+/g, ' ');
    saveToHistory();
    setText(newText);
    props.showAlert("Extra spaces Removed!", "success");
  };

  const handleUndoClick = () => {
    if (textHistory.length > 0) {
      const previousText = textHistory.pop();
      setText(previousText);
      props.showAlert("Undo successful!", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    const wordArray = text.match(/\b\w+\b/g);
    return wordArray ? wordArray.length : 0;
  };

  const saveToHistory = () => {
    setTextHistory([...textHistory, text]);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleClear}>
          Click to Clear text
        </button>

        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleRemoveSpacesClick}>
          Remove Extra Spaces
        </button>

        <button
          disabled={textHistory.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleUndoClick}
        >
          Undo
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{countWords(text)} words, {text.length} characters</p>
        <p>{0.008 * countWords(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text in the above box to preview it."}</p>
      </div>
    </>
  );
    }