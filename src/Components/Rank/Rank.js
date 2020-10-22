import React from 'react';

const Rank =({name, entries})=>{
    return(
        <div>
            <div className='f3 pa4 pv0 mb4'>   
                <p className='pv0 mv0'>
                    Hello {name}, your current detections:
                </p>
                <div className='f1 pv0 mv0'>   
                <p className='f1 pv0 mv0 '>
                   # {entries} 
                </p>
            </div>
            </div>
        </div>
    );
}

export default Rank;