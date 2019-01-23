import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Welcome} from "./components/Welcome";
import {Question} from "./components/Question";

class Game extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            players: [],
            questions: [],
            welcomeDone: false,
            questionCounter: 0
        }

        this.handleStart = this.handleStart.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
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

    nextQuestion(){
        this.setState({
            questionCounter: (this.state.questionCounter + 1)
        });
    }

    previousQuestion(){
        this.setState({
            questionCounter: (this.state.questionCounter - 1)
        });
    }
    
    render() {
        return (
            <div id="main">
                {this.state.welcomeDone 
                ? <Question 
                    questionsAmount = {this.state.questions.length - 1}
                    counter = {this.state.questionCounter}
                    onClickIncrease={this.nextQuestion}
                    onClickDecrease={this.previousQuestion}
                    players={this.state.players} 
                    results={this.state.questions[this.state.questionCounter].results} 
                    question={this.state.questions[this.state.questionCounter].question}/> 
                : <Welcome onClickHandleStart={this.handleStart}/>}
                
            </div>
            
        );
    };
}

/*function summary (){
    //to be continued
    const playerCols = this.state.players.map(player =>
        <div class="col-sm">
            {player}
        </div>
    );
    
    
    const kpiCols = this.state.questions.map(k =>
        <div class="col-sm">
            {k.kpi}
        </div>
    );
    <div class="container">
                    <div class="row">
                        <div class="col-sm" />
                        {playerCols}
                    </div>
                    <div class="row">
                    <div class="col-sm">
                    
                    </div>
                        
                    </div>
                </div>
};
*/
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  
  