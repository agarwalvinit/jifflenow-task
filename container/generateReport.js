import "../resources/css/generateReport.css"
import React from "react";
let GenerateReport = React.createClass({
    render: function() {
        console.log(this.props.puzzleAnswers);
        return (
            <div className="report-container">
                Answer Report
                {this.props.puzzleAnswers.map(function (o,i) {
                    return (
                        <div className="report-block" key={i}>
                            <div>Question {i+1} - {o.question}</div>
                            <div>Your Answer - {o.regisAns}</div>
                            <div>Correct Answer - {o.actualAns}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
});

module.exports = GenerateReport;