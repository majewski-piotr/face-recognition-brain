import React from 'react';

const FaceRecognition =({ image })=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'styles={{maxWidth:'70%', maxHeight:'auto'}}>
                <img alt='maximum length of link is 200 characters.' src={image} />
            </div>
        </div>
    );
}

export default FaceRecognition