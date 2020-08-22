import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            signedIn: false
        };
    };

    handleUsernameChange = (e) => {
        this.setState({
          username: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
          password: e.target.value
        })
    }

    handleLogin = () => {
        axios.post('/api/login/', {
          username: this.state.username,
          password: this.state.password
        }).then(res => {
            this.props.loginUser(res.data)
            this.handleRedirect()
        }).catch(err => { console.log('Unable to login') })
    }

    handleRegister = async () => {
        let result = await axios.post('/api/register/', {
          username: this.state.username,
          password: this.state.password
        })
        console.log(result)
        this.props.loginUser(result.data)
        this.handleRedirect()
        // if (result) {
        //   axios.post('/api/login/', {
        //     username: this.state.username,
        //     password: this.state.password
        //   }).then(res => {
        //     this.handleRedirect();
        //   }).catch(err => console.log('could not login after registering'))
        // }
    }

    handleRedirect = () => {
        console.log(this.props)
        this.props.history.push('/dashboard');
    }

    render() {
        console.log(this.props)
        return(
            <div className="Auth">
                <div className="Login-Box">
                    <h1>Helo</h1>
                    <div>
                        <p>Username:</p>
                        <input type="text" onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <p>Password:</p>
                        <input type="password" onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="buttons">
                    </div>
                        <button onClick={this.handleLogin}>Login</button>
                        <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser}) (Auth)