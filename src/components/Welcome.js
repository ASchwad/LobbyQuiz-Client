import React from "react";

export class Welcome extends React.Component{

   

    render() {
        return (
            <div id="main">
                <div id="welcomeElement">
                    <h3>With Lobby Quiz you can compare your League performance with your Lobby mates and find out the strengths and weaknesses of your Lobby.</h3>
                    <h1>Are you ready to play?</h1>
                    <button type="button" className="btn btn-lg black-background white" onClick={this.props.onClickHandleStart}>Hell Yeah!</button>
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
    }
}