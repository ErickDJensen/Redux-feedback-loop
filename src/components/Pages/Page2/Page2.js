import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Page2 extends Component {
    state={
        understanding: 0,
    }


    //function to set understanding feedback and move to next page
    handleChangePage = (event) => {
        console.log('in handleChangePage', this.state.understanding);
        if (this.state.understanding <= 0 || this.state.understanding > 10) {
            alert('Must be between 1 and 10');
        } else {
            this.props.dispatch({ type: 'ADD_UNDERSTAND', payload: this.state.understanding });
            //change page to support page
            this.props.history.push('/Page3');
        }
    }
    //function to take in the input value
    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState({
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
                    <h4>1 = I'm lost.  10 = I got this!</h4>
                    <input type="number" default="0" onChange={this.handleInputChange}></input>
                    <button onClick={this.handleChangePage}>Next</button>
                </div>
            </>
        )
    }
}

export default withRouter(connect()(Page2));
