import React from 'react'
import './FaceDetection.css'

const FaceDetection = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className="relative center">
                <img id='inputimage' alt='hai' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>

        </div>
    )
}

export default FaceDetection;