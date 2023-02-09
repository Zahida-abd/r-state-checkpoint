import React from 'react';
import './App.css';
import myphoto from './myimage.jpg'

class Profile extends React.Component {
constructor(props){
  super(props);
  this.state= {person:{
    counter: 0,
    name : 'ABDELGHAFOUR Zahida',
    profession :'Full stack developer',
    Bio:'work as a freelancer',
    image: myphoto
    
  } }}


  render() {
    return (
    <div>
    
    <img src={this.state.person.image} alt='animage'/>      
    <h3>Full name : {this.state.person.name}</h3>
    <h3>Profession : {this.state.person.profession}</h3>
    <p>Biography : {this.state.person.Bio}</p>
    
    

    
    </div>
    ) }
}

export default Profile;
