import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function About(props) {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = ()=>{
    if(myStyle.color == 'black'){
      setMyStyle({
         color: 'white',
      backgroundColor: 'black',
        border:'1px solid white'
      })
      setBtnText("Enable Light Mode")
      
    }
    else{
      setMyStyle({
        color: 'black',
      backgroundColor: 'white'
      }) 
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong> Text Transformation</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'black'}}>
            With our wide range of text transformation tools, you can easily convert text between different cases (uppercase, lowercase, title case) and remove formatting inconsistencies with just a few clicks.  
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Character and Word Count</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'black'}}>
               Keep track of the length of your text with our character and word count feature. Perfect for students and professionals aiming to meet specific requirements.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong> Text Encoding and Decoding</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'black'}}>
             Our platform offers text encoding and decoding utilities, allowing you to work with encoded text, URL parameters, and more.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div> */}
    </div>
  )

}