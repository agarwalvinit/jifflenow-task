import "../resources/css/main.css";
import React from "react";
import Loader from "../components/loader";
import { fetchAllData } from "../services/service";
import PuzzleGenerator from "./puzzleGenerator"

let Main = React.createClass({
    getInitialState: function () {
        return {
            data: null
        }
    },
    Url: 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json',
    componentDidMount: function () {
        let self = this;
        fetchAllData(self.Url).then((data) => {
            self.setState({
                data: data
            })
        })
    },
    render: function () {
        if(this.state.data) {
            console.log(this.state.data);
        }
        return (
            <div className="main-container">
                {this.state.data ? <PuzzleGenerator
                    data={this.state.data} /> : <Loader />}
            </div>
        );
    }
});

module.exports = Main;