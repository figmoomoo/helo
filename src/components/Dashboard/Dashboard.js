import React, { Component } from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        console.log(this.props)
        return<div>
            Dashboard
            <h1>{this.props.user.username}</h1>
        </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps) (Dashboard)