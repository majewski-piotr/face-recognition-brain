import React from 'react';
import './FaceRecognition.css'

const FaceRecognition =({ image, faceBoxArray })=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'styles={{
                maxWidth:'70%', maxHeight:'auto'
                }}>
                <img id='inputimage' alt='maximum length of link is 200 characters.' src={image} />
                <div className='bounding-boxes' style={{
                    position: 'absolute',
                    left: faceBoxArray.left,
                    top: faceBoxArray.top, 
                    width: faceBoxArray.width,
                    height: faceBoxArray.height,
                    }}></div>
            </div>
            
        </div>
    );
}

export default FaceRecognition