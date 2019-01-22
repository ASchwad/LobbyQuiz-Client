import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Welcome} from "./components/Welcome";

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
                {this.state.welcomeDone ? null : <Welcome onClickHandleStart={this.handleStart}/>}
                
            </div>
            
        );
    };
}

  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  
  