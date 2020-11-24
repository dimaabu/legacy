import React from 'react';
import '../../../src/App.css';
import './A-Style.css';
import Section from './Section';
import Cards from './HomeCards';
import $ from 'jquery'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchVal: '',
            search: [],
        }
        this.updateSearch = this.updateSearch.bind(this)
        this.searching = this.searching.bind(this)
    }
    searching() {
        var searchRes = this.state.searchVal
        $.ajax({
            type: "POST",
            url: "/searchrest",
            data: { search: searchRes },
            success:  (res) => {
                this.setState({
                    search : res
                })

            },
        })
    }

    updateSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }
    render() {
        console.log(this.state.search)
        return (
            <>
                <Section searching = {this.searching} updateSearch = {this.updateSearch} />

            </>
        )
    }
}
export default Home;