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
    let response = await fetch('https://boiling-temple-99924.herokuapp.com/imageurl', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                url:this.state.urlEntered
            })}
        );
        let data = await response.json();
        if (data.id){
          this.setState({arrayOfFaces:data.output.faces});
          this.incrementRank()
        }
    // deepai.setApiKey('42c0a275-1d51-4594-aa35-b2df2d943610');
    // const resp = await deepai.callStandardApi("facial-recognition", {image: this.state.urlEntered});
  }
  
  //calculates true size of the image, needed for responsive boundary boxes
  calculateWidthHeight = async () => {
    const image = await document.getElementById('inputimage');
    this.setState({imageWidth:Number(image.naturalWidth)});
    this.setState({imageHeight:Number(image.naturalHeight)});
  }
  
  //changes routes between signin, register, and home
  onRouteChange=(name)=>{
    this.setState({route:name})
  }

  //loads user state once signed or registered in
  loadUser=(data)=>{
    this.setState({urlEntered:''});
    this.setState({arrayOfFaces:''});
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries: data.entries,
      joined: data.joined,
    }});
  }

  //increments rank based on number of submits. !!! CHANGE LATER TO SCORE FOR EACH FACE
  incrementRank= async ()=>{
    let response = await fetch('https://boiling-temple-99924.herokuapp.com/image', {
        method:'put',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            id:this.state.user.id
        })}
    )
    let entryValue = await response.json()
    this.setState(Object.assign(this.state.user,{entries:entryValue}))
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
          ? <SignIn 
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}/>
          : <Register 
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}/>
        )
           }
      </div>
    );
}}

export default App;