import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import {Welcome} from "./components/Welcome";

class Game extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            players: [],
            quiz: {},
            welcomeDone: false
        }

        this.handleStart = this.handleStart.bind(this);
    };

    handleStart() {
        var request = require('request');
        request('http://localhost:8081/playQuiz', (error, response, body) => {
            var parsedBody = JSON.parse(body);
            this.setState({
                players: parsedBody.quiz.participants,
                questions: parsedBody.quiz.questions,
                welcomeDone: true
            });
        });
    };


    render() {
        //const welcomeDone = this.state.welcomeDone;
        return (
            <div id="main">
                <div id="welcomeElement">
                    <h3>With Lobby Quiz you can compare your League performance with your Lobby mates and find out the strengths and weaknesses of your Lobby.</h3>
                    <h1>Are you ready to play?</h1>
                    <button type="button" className="btn btn-lg black-background white" onClick={this.handleStart}>Hell Yeah!</button>
                    <br />
                    <hr class="divider"></hr>
                    <div id="recommendation">
                        <b>Before you start:</b>
                        <p>This Quiz uses your overall ranked solo/duo queue games. Please make sure that...</p>
                        <li>you have more than 10 games in this queue.</li>
                        <li>you have your League Client opened.</li>
                        <li>you created a Lobby and your friends joined you.</li>
                    </div>
                </div>
            </div>
            
        );
    };

    
}

  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  
  