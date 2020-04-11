import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page2 extends Component {

    handleChangePage = (event) => {
        console.log('in handleChangePage', this.state.understanding);
        this.props.dispatch( {type: 'ADD_UNDERSTAND', payload:this.state.understanding} );
        //change page to support page
        this.props.history.push( '/Page3' );
    }

    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState ({
            understanding: event.target.value,
        })
    }

    render() {
        return (
            <>
            <div>
                <h1>How well are you understanding the content?</h1>
            </div>
            <div>
            <h3>Understanding?</h3>
            <input type="number" onChange={this.handleInputChange}></input>
            <button onClick={this.handleChangePage}>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(connect()(Page2));
