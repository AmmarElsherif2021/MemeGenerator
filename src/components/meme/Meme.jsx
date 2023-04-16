import React from "react";
import './meme.css'
export default function Meme(){
    return(
        
          <div className='container'>
           <form className="form">
           <input type='text' className="form--input"/>
           <input type='text' className="form--input"/>
           <div className='form--btns'>
           <button className="form--button">add a new line</button>
           <button className="form--button">get a new meme</button>
           </div>
           </form>

          </div>
        
    )
}