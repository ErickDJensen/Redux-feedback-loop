import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Page3 extends Component {

    state={
        support: 0,
    }
    
    //function to set support feedback and move to next page
    handleChangePage = (event) => {
        console.log('in handleChangePage', this.state.support);
        if (this.state.support <= 0 || this.state.support > 10) {
            alert('Must be between 1 and 10');
        } else {
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
            //change page to comments page
            this.props.history.push('/Page4');
        }
    }
    //function to take in the input value
    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState({
            support: event.target.value,
        })
    }

    render() {
        return (
            <>
                <div>
                    <h1>How well are you being supported?</h1>
                </div>
                <div>
                    <h3>Support?</h3>
                    <h4>1 = I feel abandoned.  10 = I feel supported!</h4>
                    <input type="number" default="0" onChange={this.handleInputChange}></input>
                    <button onClick={this.handleChangePage}>Next</button>
                </div>
            </>
        )
    }
}

export default withRouter(connect()(Page3));