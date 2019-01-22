import React from "react";

export class Question extends React.Component{



    render() {
        return (
            <div id="question">
                <h3>{this.props.question}</h3>
                <br/>
                <h3>{this.props.results}</h3>
            </div>
        );
    }
}