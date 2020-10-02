import React from 'react';

const ImageLinkForm =()=>{
    return(
        <div>
            <p className='f3 pt3 pb0'>
                {'This box will detect faces'}
            </p>
            <div className='center pa4 br3 shadow-5' style={{width:'700px'}}>
                <input type='tex' class='f4 pa2 w-70 center'/>
                <button class ='br2 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;