import React from 'react';
import './FaceRecognition.css'
import BoundaryBox from './BoundaryBox'

const FaceRecognition =({ image, faceBoxArray })=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'styles={{
                maxWidth:'70%', maxHeight:'auto'
                }}>
                <img id='inputimage' alt='maximum length of link is 200 characters.' src={image} />
                    <BoundaryBox faceBoxArray={faceBoxArray}/>
            </div>
            
        </div>
    );
}

export default FaceRecognition