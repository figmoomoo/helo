import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component{
    render(){
        return<div>
            <button >Home</button>
            <button>New Post</button>
            <button>Logout</button>
        </div>
    }
}

export default Nav;