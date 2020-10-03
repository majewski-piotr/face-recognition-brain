import React from 'react';


//Change it to return multiple boxes
const BoundaryBox=({faceBoxArray})=>{
    return(
        <div className='bounding-boxes' style={{
            position: 'absolute',
            left: faceBoxArray.left,
            top: faceBoxArray.top, 
            width: faceBoxArray.width,
            height: faceBoxArray.height,
            }}></div>
    )
}

export default BoundaryBox