import React from 'react';
import './FaceRecognition.css'
import BoundaryBox from './BoundaryBox.js'

const FaceRecognition =({ image, faceBoxArray,picHeight,picWidth })=>{
        return(
            <div className='center ma'>
                <div id='inputbox' className='absolute mt2'style={{maxWidth:'70%', maxHeight:'auto'}}>
                    <img id='inputimage' alt='maximum length of link is 200 characters.' src={image} />
                    <BoundaryBox 
                        faceBoxArray={faceBoxArray}
                        picWidth={picWidth}
                        picHeight={picHeight}/>
            </div> 
        </div>
    );
}


export default FaceRecognition