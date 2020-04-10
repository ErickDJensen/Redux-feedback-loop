import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

class Page2 extends Component {

    handleChangePage = () => {
        //change page to support page
        this.props.history.push( '/Page3' );
    }

    render() {
        return (
            <>
            <div>
                <h1>How well are you understanding the content?</h1>
            </div>
            <div>
            <h3>Understanding?</h3>
            <input type="number"></input>
            <button onClick={this.handleChangePage}>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(Page2);
