import React from 'react';


//Change it to return multiple boxes
const BoundaryBox=({ faceBoxArray,picWidth,picHeight })=>{
    if (faceBoxArray !== undefined){

        //line below is to prevent problems with .map function at the end of parents block
        faceBoxArray = Array.from(faceBoxArray)
        //changing location values from api into perc values
        const calculateFaceLocation = (data) => {
            return({
                left: ((data.bounding_box[0] * 100)/picWidth) + '%',
                top: ((data.bounding_box[1] * 100)/picHeight) + '%',
                width: ((data.bounding_box[2] * 100)/picWidth) + '%',
                height: ((data.bounding_box[3] * 100)/picHeight) + '%',
            })
        }
        const returnfinalbox=(singleArr,ind)=>{
            const calculatedPosition = calculateFaceLocation(singleArr)
            return(
                <div className='bounding-boxes' key={ind} style={{
                    position: 'absolute',
                    left: calculatedPosition.left,
                    top: calculatedPosition.top, 
                    width: calculatedPosition.width,
                    height: calculatedPosition.height,
                    }}></div>
                )
            }
        
        return(<div>
             {faceBoxArray.map((face,index )=>{
                return returnfinalbox(face,index)
                })}
                </div>)
    }
    else{
        return null
    }
    
}

export default BoundaryBox