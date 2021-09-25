import React from "react";
import dataService from "../../services/dataService/dataService";
import Cards from "../Cards/Cards";

import "./Main.css"

class Main extends React.Component {
    state = {
        data: null,
        isDataFetched: false
    }
    componentDidMount() {
        dataService.getData()
            .then(data => {
                this.setState({ data, isDataFetched: true });
            })
            .catch(e => console.log(e));
    }


    render() {
        const main = (
            <main className="main">
                <div>
                    <strong>Sort by:</strong>
                </div>
                <Cards data={this.state.data} />

            </main>
        );
        const loading = <div>Loading...</div>
        const content = this.state.isDataFetched ? main : loading;

        return content;
    }

}

export default Main;