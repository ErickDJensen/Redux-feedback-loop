import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

class Page1 extends Component {

    handleChangePage = () => {
        //change page to understanding page
        this.props.history.push( '/Page2' );
    }

    render() {
        return (
            <>
            <div>
                <h1>How are you feeling today?</h1>
            </div>
            <div>
                <h3>Feeling?</h3>
                <input type="number"></input>
                <button onClick={this.handleChangePage}>Next</button>
            </div>
            </>
        )
    }
}

export default withRouter(Page1);
