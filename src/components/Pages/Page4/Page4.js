import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page4 extends Component {

    handleChangePage = (event) => {
        console.log('in handleChangePage', this.state.comment);
        this.props.dispatch( {type: 'ADD_COMMENT', payload:this.state.comment} );
        //change page to summary page
        this.props.history.push( '/Page5' );
    }

    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState ({
            comment: event.target.value,
        })
    }

    render() {
        return (
            <>
            <div>
                <h1>Any comments you want to leave?</h1>
            </div>
            <div>
            <h3>Comments</h3>
            <input type="text" onChange={this.handleInputChange}></input>
            <button onClick={this.handleChangePage}>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(connect()(Page4));