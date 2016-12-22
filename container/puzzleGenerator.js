import React from "react";
import _ from "lodash";
import QuestionContainer from "./questionContainer";
let PuzzleGenerator = React.createClass({
    getInitialState: function () {
        return {
            puzzleData: _.cloneDeep(this.props.data),
            index: 0,
            puzzleAnswers: []
        }
    },
    updateAnswers: function (data) {
        let clonedPuzzledData = _.cloneDeep(this.state.puzzleAnswers);
        clonedPuzzledData.push(data);
        this.setState({
            puzzleAnswers: clonedPuzzledData,
            index: this.state.index+1
        })
    },
    render: function() {
        return (
            <QuestionContainer puzzleData={this.state.puzzleData}
                               updateAnswers = {this.updateAnswers}
                               index = {this.state.index}
                               puzzleAnswers={this.state.puzzleAnswers} />
        );
    }
});

module.exports = PuzzleGenerator;