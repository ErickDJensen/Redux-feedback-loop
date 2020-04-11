import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page3 extends Component {

    handleChangePage = (event) => {
        console.log('in handleChangePage', this.state.support);
        this.props.dispatch( {type: 'ADD_SUPPORT', payload:this.state.support} );
        //change page to comments page
        this.props.history.push( '/Page4' );
    }

    handleInputChange = (event) => {
        console.log('in handleInputChange', event.target.value);
        this.setState ({
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
            <input type="number" onChange={this.handleInputChange}></input>
            <button onClick={this.handleChangePage}>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(connect()(Page3));