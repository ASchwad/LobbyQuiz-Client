import React from "react";

export class Question extends React.Component{

    
    render() {
        const resultProducer = this.props.results.map(r => 
            {
                return(
                    <div className="col-sm">
                        {r}
                    </div>
                )
            })
            

        const playerProducer = this.props.players.map(p => 
            {
                return(
                    <div className="col-sm">
                        {p}
                    </div>
                )
            })


        return (
            <div id="questionBody"> 
                <div id="question">
                    <h2>{this.props.counter + 1}. Question: </h2>
                    <h3>{this.props.question}</h3>
                    <br/>
                    <div id="table">
                        <div class="row">
                            {playerProducer}
                        </div>
                        <div class="row">
                            {resultProducer}
                        </div>
                    </div>
                </div>
                {this.props.counter>0 ? <button type="button" id="previousQuestion" onClick={this.props.onClickDecrease} className="btn btn-lg black-background white float-left">Previous Question</button> : null}
                {this.props.counter < this.props.questionsAmount ? <button type="button" id="nextQuestion" onClick={this.props.onClickIncrease} className="btn btn-lg black-background white float-right">Next Question</button> :null}
            </div> 
        );
    }
}