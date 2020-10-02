import React from 'react';

const ImageLinkForm =({onChangeFunc,onClickFunc})=>{
    return(
        <div>
            <p className='f3 pt3 pb0'>
                {'This box will detect faces'}
            </p>
            <div className='center pa4 br3 shadow-5' style={{width:'80%'}}>
                <input onChange={onChangeFunc} type='tex' className='f4 pa2 w-70 center'/>
                <button onClick={onClickFunc} className='br2 w-30 f6 grow link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;