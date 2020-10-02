import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './imageLogo.png';

const Logo =()=>{
    return(
        <nav className='ma1 mt0 mb0 pl4'>
            <Tilt className="Tilt br2 shadow-2 pa2" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa2">
                    <img src={brain} alt='logo'/>
                </div>
            </Tilt>
        </nav>
    );
}

export default Logo;