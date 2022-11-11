import React from 'react'
import Tilt from 'react-tilt'
import face from './face.png'
import "./Logo.css"

const Logo = () => {
    return (
        <div className='ma5 mt0'>
            <Tilt className="Tilt shadow-2" options={{ max: 55 }} style={{ height: 140, width: 140 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '15px'}} alt='facelogo' src={face} /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;