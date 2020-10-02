import React, { Component } from 'react';
import './App.css';
import Navigation from '../Components/Navigation/Navigation.js';
import Logo from '../Components/Logo/Logo.js';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm.js';
import Rank from '../Components/Rank/Rank.js';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particlesOptions from './particlesOptions.js';

const app = new Clarifai.App({
  apiKey: "1f0045722d3d4d629c44149d9dde8673",
 });


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
    let data = await app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.urlEntered);
    console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
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
