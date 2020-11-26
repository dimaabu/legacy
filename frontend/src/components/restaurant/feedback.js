<<<<<<< HEAD
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Feedback from './scenes/Feedback';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Feedback />
			</Provider>
		);
	}
}

export default App;
=======
import React from 'react'
import "./feedback.css"

function feedback() {
    return (
        <div className='oneresdiv'>
            <div className="mainContainer">
                <div className="Card">
                    <div className="UpperContainer">
                    <br></br>
                       <h3>Give Us FeedBack</h3>
                    </div>
                    <div className="LowerContainer">
                    <form>
                       <h4>Overall Rating</h4>
                       {/* Star Review add here*/}
                       <br></br>   
                       <br></br>  
                       <br></br>  
                       <label for="feedback"><h3>Write your feedback</h3></label>
                       <br></br>
                       <textarea className="feedback" type="text" id="feedback" name="feedback" rows="15" cols="47" placeholder="FeedBack"></textarea>
                        <br></br>
                       <button className="B">SEND</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default feedback

  
>>>>>>> d3b933e092b2891bfe862109e7692934154d4552
