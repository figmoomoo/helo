import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Routes from "./routes"
import {withRouter} from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <div className="App">
        {this.props.location.pathname == "/" ? null: <Nav/>}
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
