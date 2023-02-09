import React from 'react';
import './App.css';
import Profile from './profile.js'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentCount:0
        ,shows: false,
  text:'Show',
    }
    this.handleClick=()=>{this.setState({shows:!this.state.shows});
    this.setState({currentCount:0})
   
    
  if(this.state.shows){this.setState({text:'show'})}
  else{this.setState({text:'Hide'})
  }}
}

timer=()=> {
    this.setState({
      currentCount: this.state.currentCount + 1
    })

}
componentDidMount=()=> {
    this.intervalId = setInterval(this.timer, 1000);
}


  render() {
    return(
      
      <div>
        <div className='profile'>
      {this.state.shows && <Profile/>}
            <button onClick={this.handleClick} >{this.state.text}</button>
            <h1>{this.state.currentCount}</h1>
            </div>
       
       </div>
    )}}

export default App;