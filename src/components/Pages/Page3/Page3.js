import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page3 extends Component {

    handleChangePage = () => {
        //change page to comments page
        this.props.history.push( '/Page4' );
    }

    render() {
        return (
            <>
            <div>
                <h1>How well are you being supported?</h1>
            </div>
            <div>
            <h3>Support?</h3>
            <input type="number"></input>
            <button onClick={this.handleChangePage}>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(connect()(Page3));