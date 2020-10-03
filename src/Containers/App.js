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
      imageHeight:'',
      imageWidth:'',
      //this is just first element of faces, subject to change !!!!
      arrayOfFaces:[],
      arrayOfFacesPerc:[],
    }
  }

  //changes state as we type into ImageLinkForm
  onTypingUpdate=(event)=>{
    this.setState({urlEntered:event.target.value});
    this.setState({arrayOfFacesPerc:[]})
  }

  //changing hardcoded pixels from api into perc values
  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left: ((data[0] * 100)/width) + '%',
      top: ((data[1] * 100)/height) + '%',
      width: ((data[2] * 100)/width) + '%',
      height: ((data[3] * 100)/height) + '%',
    }
  }


  //contacts face-recognition API when we click button in ImageLinkForm
  onClickSend = async ()=>{
    deepai.setApiKey('42c0a275-1d51-4594-aa35-b2df2d943610');
    const resp = await deepai.callStandardApi("facial-recognition", {image: this.state.urlEntered});
    this.setState({arrayOfFaces:resp.output.faces[0].bounding_box})
    this.setState({arrayOfFacesPerc:this.calculateFaceLocation(this.state.arrayOfFaces)})
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
        <ImageLinkForm 
          onChangeFunc={this.onTypingUpdate}
          onClickFunc={this.onClickSend}/>
        <FaceRecognition 
          image={this.state.urlEntered} 
          faceBoxArray={this.state.arrayOfFacesPerc}/>
      </div>
    );
  }
}

export default App;
