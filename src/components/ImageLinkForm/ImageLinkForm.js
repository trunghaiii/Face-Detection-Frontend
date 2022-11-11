import React from 'react'
import "./ImageLinkForm.css"


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
           <p className='f3'>
              This App Will Detect The Face In Picture
           </p>
           <div className='w-70 center'>
            <input className='f5 pa2 w-60' type='text' onChange={onInputChange} /><br/><br/>
            <button className='w-25 f4 link bg-light-purple' onClick={onButtonSubmit}
            >Detect</button>
           </div>
        </div>
    )
}

export default ImageLinkForm;