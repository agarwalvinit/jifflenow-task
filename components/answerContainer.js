import "../resources/css/answerContainer.css";
import React from "react";

let AnswerContainer = React.createClass({
    render: function() {
        let self = this,
            ans = ["A", "B", "C", "D"];//assuming the options will be only A,B,C and D
        return (
            <div className="answer-container">
                {ans.map(function (o, i) {
                    return (
                        <div className="answers-block"
                             key={i}
                             onClick={() => {
                                 self.props.updateAnswers(i)//updating the answers array on selecting options
                             }}>{o}
                        </div>
                    )
                })}
            </div>
        );
    }
});

module.exports = AnswerContainer;