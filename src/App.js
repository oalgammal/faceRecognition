import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import FaceRec from './components/facerec/FaceRec';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLink from './components/imagelink/ImageLink';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey:'127471c028d342f3b9c643db7c8011d4'
});
const customs={
      "particles": {
          "number": {
              "value": 80
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }
class App extends Component{
    constructor(){
      super();
      this.state={
        input:'',
        imageurl:'',
        box:{}
      }
    }
    calcFace = (data)=>{
      const inputData= data.outputs[0].data.regions[0].region_info.bounding_box;
      const img = document.getElementById('inputIMG');
      const width= Number(img.width);
      const height= Number(img.height);
      console.log(width,height)
      return{
        leftCol: inputData.left_col*width,
        topRow: inputData.top_row*height,
        rightCol: width-(inputData.right_col*width),
        bottomRow: height-(inputData.bottom_row*height),
      }

    }
    displayBox=(box)=>{
      this.setState({box:box});
    }
    onInputChange = (event)=>{
      this.setState({input:event.target.value})
    }
    onSubmit = () =>{
      this.setState({imageurl: this.state.input})
      app.models
      .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then(response=>this.displayBox(this.calcFace(response)))
      .catch(err=>console.log(err));
      
    }


    render(){
        return (
          <div className="App">
            <Particles className='particles' params={customs} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLink onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
            <FaceRec box={this.state.box} imageurl={this.state.input}/>
          </div>
       );
  }
}

export default App;
 