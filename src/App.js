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
        imageurl:''
      }
    }
    onInputChange = (event)=>{
      this.setState({input:event.target.value})
    }
    onSubmit = () =>{
      this.setState({imageurl: this.state.input})
      app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:z
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,this.state.input).then(
      function (response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function(err){
        throw(err)
      });
    }

    render(){
        return (
          <div className="App">
            <Particles className='particles' params={customs} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLink onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
            <FaceRec imageurl={this.state.input}/>
          </div>
       );
  }
}

export default App;
 