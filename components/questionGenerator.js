import "../resources/css/questionGenerator.css"
import React from "react";
import AnswerContainer from "./answerContainer";
let QuestionGenerator = React.createClass({
    render: function() {
        let self = this,
            answers = ["A", "B", "C", "D"],//assuming the options will be only A,B,C and D
            questionLength = this.props.puzzleData.length,//total question count
            answersLength = this.props.puzzleAnswers.length+1;//total answers count
        return (
            <div className="question-container">
                <div className="quiz-block">JS Quiz {answersLength} of {questionLength} </div>
                <div className="question-block">{self.props.questionObj.text}</div>
                {self.props.questionObj.options.map(function (o, i) {
                    return (
                        <div className="answer-block" key={i}>{answers[i] +" - " + o}</div>
                    )
                })}
                <AnswerContainer puzzleData={this.props.puzzleData}
                                 updateAnswers={self.props.updateAnswers}
                                 selectedIndex={this.props.index}/>
            </div>
        );
    }
});

module.exports = QuestionGenerator;