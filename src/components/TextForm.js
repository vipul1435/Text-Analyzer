import React, {useState} from 'react'

export default function TextForm(props) {
    const convertToUpper = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.alert('Converted to upperCase','Success');
    }
    const convertToLower = ()=>{
        let upperText = text.toLowerCase();
        setText(upperText);
        props.alert('Converted to lowerCase','Success');
    }
    const handelChanges = (event) =>{
        setText(event.target.value);
    }
    const [text , setText] = useState("");
  return (
    <>
    <div>
        <div className="mb-3">
            <h3>
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            </h3>
            <textarea className="form-control" value={text} onChange={handelChanges} id="myBox" rows="10" placeholder='Enter your Text here' style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToLower}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={()=>{navigator.clipboard.writeText(text)}}>Copy Text</button>
    </div>
    <div className='container my-2'>
        <h4>Text Summary</h4>
        <h6>Total number of words are {text.split(" ").filter((element)=>{return element.length!==0}).length} and number of characters are {text.length}</h6>
        <h4>Summary</h4>
        <div>{text}</div>
    </div>
    </>
  )
}
