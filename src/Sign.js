import React from 'react';
import './index.css';
import {Form,Button,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bnnaer from './assets/images/banner.png';


class Sign extends React.Component{
  constructor(){
    super();
    this.state={
      email: "",
      password: ""
    }
  }
   handleInput = (e) =>{
this.setState ({
  [e.target.name]:e.target.value
    })
   }
   handleSubmit = (e) =>{
     e.preventDefault();
     const {email, password} = this.state;
     if(!email || !password){
       alert("Enter Email and Password");
       return false;
     }
     localStorage.setItem('isLoggedIn',true);
     this.props.history.push("/dashboard");
   }
  render(){
  return (
  <>
     <div className="row">
         <div className="col-sm-1"></div>
              <div className="col-xs-4 col-sm-4 col-md-4 form_style"  style={{marginTop:"72px"}}>
                <Form method="" action="" onSubmit={this.handleSubmit}>
                      <Form.Label><h4>Sign in</h4></Form.Label>
                      <Form.Group>
                        <Form.Control type="email" placeholder="Enter email" 
                          onChange={this.handleInput}
                          value={this.state.email}
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control type="password" placeholder="Password" 
                          onChange={this.handleInput}
                          value={this.state.password}
                          name="password"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="btn btn-info btn-block">
                        Submit
                      </Button>
                </Form>
                  <p>Don’t have an account? <Link to="/resister">Register now</Link></p>
                  <br/>
                  <br/>
                  <p>Forgot your password? <Link to="#"> Reset Here</Link></p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 banner_img" align="center">
                  <div >
                    <img src={Bnnaer} alt="banner"/>
                  </div>
              </div>
    </div>
  </>
  );
}
}

export default Sign;