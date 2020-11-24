import React from "react";
import './feedback.css';
import React, { Component } from 'react';
class Feedback extends React.Component {
  

submitFormHandler = event => {
    event.preventDefault();
    
    console.dir(this.refs.name.value); //will give us the name value
  }
  
  render() {
    return (
        <div>
  
          <form onSubmit={this.submitFormHandler}>
            <div>
              <input type="text" name="name" ref="name" />
            </div>
          </form>
  
        </div>
    );
  }

}
export default Feedback;