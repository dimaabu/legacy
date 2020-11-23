import React from "react";
import $ from 'jquery'
// import { Link } from 'react-router-dom';


class Restaurants extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurants: []
        }

    }

    componentDidMount() {

        var cat = this.props.location.state.whichcat
        document.documentElement.scrollTop = 0;
        $.ajax({
            method: 'POST',
            url: '/getcat',
            data: { cat: cat },
            success: (res) => {
                this.setState({
                    restaurants: res
                })

            },
            error: (err) => {
                console.log(err)
            }

        })
    }



    render() {
        return (<div>hello</div>)

    }

}

export default Restaurants;
