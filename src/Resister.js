import React from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bnnaer from './assets/images/banner.png';


class Resister extends React.Component {
  constructor(){
    super()
      this.state={
        fname:"",
        lname:"",
        Gno:"",
        Ono:"",
        email:"",
        phone:"",
        pass:"",
      }
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleInput(){

  }
  handleSubmit(){
    alert("Resistration successful")
  }
  render(){
 
  return (
    <>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 style_form">
                <Form  onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Form.Label><h4>Resister</h4></Form.Label>
                          <Form.Control as="select">
                            <option>-Select Country-</option>
                            <option>Inida</option>
                            <option>USA</option>
                            <option>Japan</option>
                            <option>Nepal</option>
                          </Form.Control>
                      </Form.Group>
                          <Form.Group>
                                  <Form.Control type="text" placeholder="FRIST NAME"
                                  onChange={this.handleInput} />
                            </Form.Group>
                            <Form.Group>
                                  <Form.Control type="text" placeholder="LAST NAME" 
                                    onChange={this.handleInput}
                                  />
                            </Form.Group>
                            <Form.Group>
                                  <Form.Control type="text" placeholder=" GMC orNMC Number" 
                                    onChange={this.handleInput}
                                  />
                            </Form.Group>
                            <Form.Group>
                                  <Form.Control type="text" placeholder=" ODS Code (P NUMBER)" 
                                    onChange={this.handleInput}
                                  />
                            </Form.Group>
                      <Form.Group>
                        <Form.Control type="email" placeholder="EMAIL"
                        onChange={this.handleInput} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Control type="number" placeholder=" PHONE NUMBER" 
                            onChange={this.handleInput}
                          />
                      </Form.Group>
                      <Form.Group>
                          <Form.Control type="password" placeholder=" CREATE PASSWORD"
                          onChange={this.handleInput} />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="btn btn-info btn-block">
                          Submit
                      </Button>
                </Form>
                <p>By registering you agree to the <Link to="/resister">terms and conditions</Link></p>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 image_style" align="center" >
              <p>Video-Consult your patients for <strong>FREE</strong> during the COVID-19 crisis</p>
              <img src={Bnnaer} alt="banner" />
          </div>
        </div>
    </>
  );
}
   
}
export default Resister;