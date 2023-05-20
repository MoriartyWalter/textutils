import React, { useState } from 'react'

export default function TextFrom(props) {

    const [text, setText] = useState('');


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleInvClick = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Text has been inverted", "success");
    };

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space", "success");
    }

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button style={{ backgroundColor: props.mode === 'primary' ? 'black' : 'blue' }} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
                <button style={{ backgroundColor: props.mode === 'primary' ? 'black' : 'blue' }} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
                <button style={{ backgroundColor: props.mode === 'primary' ? 'black' : 'blue' }} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleInvClick}>Reverse</button>
                <button style={{ backgroundColor: props.mode === 'primary' ? 'black' : 'blue' }} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                <button style={{ backgroundColor: props.mode === 'primary' ? 'black' : 'blue' }} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button style={{ backgroundColor: props.mode === 'primary' ? 'black' : 'blue' }} disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{(text.split(" ").filter((element) => { return element.length !== 0 }).length)} words and {text.length} characters</p> {/* filter function returns only boolean(ture or false)  */}
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}
