import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number:{
      value:99,
      density: {
        enable:true,
        value_area:800,
      }
    },
    color:'#000000',
    line_linked: {
      color:'#000000',
    }
  }
}

class App extends Component{

  render(){
    return (
      <div className="App">
         <Particles 
           className='particles'
           params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
