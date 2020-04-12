import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Page6 extends Component {

    //function to clear data and go back to starting screen
    handleChangePage = (event) => {
        console.log('in handleChangePage');
        this.props.dispatch({ type: 'CLEAR_STORE' });
        //go back to the beginning
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.handleChangePage}>Leave New Feedback</button>
            </div>
        )
    }
}

export default withRouter(connect()(Page6));
