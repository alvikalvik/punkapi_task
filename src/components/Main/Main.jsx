import React from "react";
import dataService from "../../services/dataService/dataService";
import Cards from "../Cards/Cards";
import Search from "../Search/Search";
import Sortby from "../Sortby/Sortby";

import "./Main.css"

class Main extends React.Component {
    state = {
        data: null,
        isDataFetched: false,
        sortBy: 'None',
        searchStr: '',
    }
    componentDidMount() {
        dataService.getData()
            .then(data => {
                this.setState({ data, isDataFetched: true });
            })
            .catch(e => console.log(e));
    }

    setSortBy(sortBy) {
        this.setState(state => {
            return { ...state, sortBy }
        })
    }

    setSearchStr(searchStr) {
        this.setState(state => {
            return { ...state, searchStr }
        })
    }


    render() {
        const main = (
            <main className="main">
                <div className="main__sort-search-wrapper">
                    <Sortby
                        sortBy={this.state.sortBy}
                        setSortBy={this.setSortBy.bind(this)}
                    />
                    <Search
                        searchStr={this.state.searchStr}
                        setSearchStr={this.setSearchStr.bind(this)}
                    />
                </div>

                <Cards
                    data={this.state.data}
                    sortBy={this.state.sortBy}
                    searchStr={this.state.searchStr}
                />
            </main>
        );
        const loading = <div>Loading...</div>
        const content = this.state.isDataFetched ? main : loading;

        return content;
    }

}

export default Main;