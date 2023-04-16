import React from "react";
import { useState } from "react";
import './meme.css'
export default function Meme(){
    //add component state
    const [lines,setLines]=useState([<Input/>])

    //handle new line
    function handleLine(e){
        e.preventDefault()
        
        if (lines.length<4){
            setLines([...lines,<Input/>])
        }else{
            setLines([<Input/>])
        }
        
    }
    //handle adding new meme
    function handleMeme(e){
        e.preventDefault()
        console.log('new meme supposed to be added')
    }
    //Text input to be added
    function Input(){
        return(
            <input type='text' className="form--input"/>
        )}
    //the return of Meme component
    return(
        
          <div className='container'>
          
           <form className="form">
           
            <div className='inputs-container'>
               <h2>Add lines</h2>
                <div>
                  <button type="button" className="line-button" onClick={handleLine}>
                    +
                  </button>
                </div>
                {lines} 
            </div>
           <div className='form--btns'>
            
            <button type="button" className="form--button" onClick={handleMeme}>get a new meme</button>
           </div>
           </form>

          </div>
        
    )
}