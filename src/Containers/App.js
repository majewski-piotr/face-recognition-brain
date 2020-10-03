import React, { Component } from 'react';
import './App.css';
import Navigation from '../Components/Navigation/Navigation.js';
import Logo from '../Components/Logo/Logo.js';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm.js';
import Rank from '../Components/Rank/Rank.js';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import deepai from 'deepai';
import particlesOptions from './particlesOptions.js';

class App extends Component{
  constructor(){
    super();
    this.state = {
      urlEntered:'',
    }
  }

  //changes state as we type into ImageLinkForm
  onTypingUpdate=(event)=>{
    this.setState({urlEntered:event.target.value});
  }

  //contacts face-recognition API when we click button in ImageLinkForm
  onClickSend = async ()=>{
    deepai.setApiKey('42c0a275-1d51-4594-aa35-b2df2d943610');
    const resp = await deepai.callStandardApi("facial-recognition", {image: this.state.urlEntered,});
    for (let obj of resp.output.faces){
      console.log(obj.bounding_box);
    }
  }

  render(){
    return (
      <div className="App">
         <Particles 
           className='particles'
           params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onChangeFunc={this.onTypingUpdate} onClickFunc={this.onClickSend}/>
        <FaceRecognition image={this.state.urlEntered}/>
      </div>
    );
  }
}

export default App;
