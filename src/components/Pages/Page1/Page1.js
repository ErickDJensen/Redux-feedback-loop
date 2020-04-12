import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Page1 extends Component {



    handleChangePage = (event) => {
        console.log('in handleChangePage', this.state.feeling);
        if (this.state.feeling <= 0 || this.state.feeling > 10) {
            alert('Must be between 1 and 10');
        } else {
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
            //change page to understanding page
            this.props.history.push('/Page2');
        }
    }

    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState({
            feeling: event.target.value,
        })
    }

    render() {
        console.log('props', this.props);

        return (
            <>
                <div>
                    <h1>How are you feeling today?</h1>
                </div>
                <div>
                    <h3>Feeling?</h3>
                    <h4>1 = I'm feeling stressed. 10 = feeling great!</h4>
                    <input type="number" default="0" onChange={this.handleInputChange}></input>
                    <button onClick={this.handleChangePage}>Next</button>
                </div>
            </>
        )
    }
}

export default withRouter(connect()(Page1));
