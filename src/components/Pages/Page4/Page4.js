import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page4 extends Component {

    handleChangePage = () => {
        //change page to summary page
        this.props.history.push( '/Page5' );
    }
    render() {
        return (
            <>
            <div>
                <h1>Any comments you want to leave?</h1>
            </div>
            <div>
            <h3>Comments</h3>
            <input type="text"></input>
            <button onClick={this.handleChangePage}>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(connect()(Page4));