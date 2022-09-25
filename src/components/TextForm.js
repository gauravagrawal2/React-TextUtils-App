import React, { useState } from 'react'
export default function TextForm(props) {
    const handleupclick = () => {
        console.log('uppercase was clicked :' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Convert to uppercase Successfully...","success");
    }
    const handlelowclick = () => {
        console.log('lowerCsse was clicked :' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Convert to Lowercase Successfully...","success");

    }
    const handleclearclick = () => {
        let newText = '';
        setText(newText);
        props.showAlert(" All Text Clear Successfully...","success");

    }
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" All Text Copy Successfully...","success");

    }
    const handleSpaceClick = () => {
        const newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert(" All Extra Space Remove Successfully...","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState(" enter text here ");
    //  setText("New Text");
    return (
        <>
            <div className={"container"} style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#ffffff24':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleupclick} >convert upperCase</button>
                <button className="btn btn-primary m-2" onClick={handlelowclick} >convert lowerCase</button>
                <button className="btn btn-primary m-2" onClick={handleclearclick} >Clear Text</button>
                <button className="btn btn-primary m-2" onClick={handleCopyClick} >Copy Text</button>
                <button className="btn btn-primary m-2" onClick={handleSpaceClick} >Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the TextBox above to preview it here..."}</p>
            </div>
        </>
    )
}