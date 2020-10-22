import React from 'react';

const ImageLinkForm =({onChangeFunc,onClickFunc})=>{
    return(
        <div>
            <p className='f3 pt3 pb0 mb0'>
                {'Copy image url into box below for face detection!'}
            </p>
            <div className='center pa4 br3 shadow-5' style={{width:'70%'}}>
                <input onChange={onChangeFunc} type='tex' className='f4 pa2 w-70 center'/>
                <button id='detectButton' onClick={onClickFunc} className='br2 w-34 f4 grow link pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;