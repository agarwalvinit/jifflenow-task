import React from "react";
import GenerateReport from "./generateReport";
import QuestionGenerator from "../components/questionGenerator";
let QuestionContainer = React.createClass({
    getInitialState: function () {
        return {
            questionObj: this.props.puzzleData[this.props.index]
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            index: nextProps.index,
            puzzleAnswers: nextProps.puzzleAnswers,
            questionObj: nextProps.puzzleData[nextProps.index]
        })
    },
    updateAnswers: function (ind) {
        let answerObj = {
            question: this.state.questionObj.text,
            regisAns: this.state.questionObj.options[ind],
            actualAns: "answer " + this.state.questionObj["answer"]
        };
        this.props.updateAnswers(answerObj);
    },
    render: function() {
        return (
            <div>
                {(this.state.index) !== this.props.puzzleData.length ?
                    <QuestionGenerator puzzleData={this.props.puzzleData}
                                       puzzleAnswers={this.props.puzzleAnswers}
                                       updateAnswers={this.updateAnswers}
                                       selectedIndex={this.state.index}
                                       questionObj={this.state.questionObj} /> :
                    <GenerateReport puzzleAnswers={this.state.puzzleAnswers}/> }

            </div>
        );
    }
});

module.exports = QuestionContainer;