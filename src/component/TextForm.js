import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUPClick = () => {
    console.log('uppercase clicked');
    let newText = text.toLocaleUpperCase();
    setText(newText);
    
    props.showAlert("Converted to uppercase !", "success");
  }

  const handleLoClick = () => {
    // console.log('uppercase clicked');
    let newText = text.toLocaleLowerCase();
    setText(newText);

    props.showAlert("Converted to lowercase !", "success");

  }

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("Text copied to clipboard !", "success");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra spaces removerd !", "success");

  }

  const handleClearClick = () => {
    // console.log('uppercase clicked');
    let newText = '';
    setText(newText);

    props.showAlert("Text cleared !", "success");

  }

  const handleOnChange = (event) => {
    console.log('handle On Change');
    setText(event.target.value);
  }


  const [text, setText] = useState('');

  return (
    <div>
      <div className="container"  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mb-3" >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{
            backgroundColor: props.mode === 'dark' ? '#1d2229' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}
             id="myBox" rows="8"></textarea>
        </div>
        <div className="container my-3">
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUPClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All Text</button>
        </div>
      </div>

      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summery</h2>
        <p>Number of Words {text.split(' ').filter((element)=>{return element.length!==0}).length} and Characters {text.length} </p>
        <p>Time to read {.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes</p>

        <h2>preview</h2>
        <p> {text.length>0?text:"Nothimg to preview!"} </p>
      </div>

    </div>


  )
}
