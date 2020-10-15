import React, { Component } from 'react';
import './App.css';

import SignIn from '../Components/SignIn/SignIn.js';
import Register from '../Components/Register/Register.js';
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
      arrayOfFaces:'',
      route:'SignIn',
      user:{
        id:'',
        name:'',
        email:'',
        entries: '',
        joined: '',
      }
    }
  }


  //changes state as we type into ImageLinkForm
  onTypingUpdate=(event)=>{
    this.setState({urlEntered:event.target.value});
    this.setState({arrayOfFaces:undefined})
  }

  //contacts face-recognition API when we click button in ImageLinkForm
  onClickSend = async ()=>{
    this.calculateWidthHeight()
    deepai.setApiKey('42c0a275-1d51-4594-aa35-b2df2d943610');
    const resp = await deepai.callStandardApi("facial-recognition", {image: this.state.urlEntered});
    this.setState({arrayOfFaces:resp.output.faces});
    if (await resp) { this.incrementRank() }
  }

  calculateWidthHeight = async () => {
    const image = await document.getElementById('inputimage');
    this.setState({imageWidth:Number(image.naturalWidth)});
    this.setState({imageHeight:Number(image.naturalHeight)});
  }
  
  onRouteChange=(name)=>{
    this.setState({route:name})
  }

  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries: data.entries,
      joined: data.joined,
    }})
  }

  incrementRank=()=>{
    fetch('http://localhost:3000/image', {
        method:'put',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            id:this.state.user.id
        })}
    )
    .then(response => response.json())
    .then(entryValue => {
            this.setState(Object.assign(this.state.user,{entries:entryValue}))
        }
    )
}
  
  render(){
    return (
      <div className="App">
         <Particles 
           className='particles'
           params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'Home'
        ? <div>
            <Logo />
            <Rank 
              name={this.state.user.name}
              entries={this.state.user.entries}/>
            <ImageLinkForm 
              onChangeFunc={this.onTypingUpdate}
              onClickFunc={this.onClickSend}/>
            <FaceRecognition 
              image={this.state.urlEntered} 
              faceBoxArray={this.state.arrayOfFaces}
              picHeight={this.state.imageHeight}
              picWidth={this.state.imageWidth}/>
        </div>
        :(
          this.state.route === 'SignIn'
          ? <SignIn onRouteChange={this.onRouteChange}/>
          : <Register 
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}/>
        )
           }
      </div>
    );
}}

export default App;