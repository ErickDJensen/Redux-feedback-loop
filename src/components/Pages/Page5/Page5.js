import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import axios from 'axios';

class Page5 extends Component {

    state={
        newFeedback: {
            feeling: this.props.feeling[0],
            understanding: this.props.understanding[0],
            support: this.props.support[0],
            comments: this.props.comments[0],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding feedback`, this.state.newFeedback);
        // TODO - axios request to server to add book
        axios.post('./feedback', this.state.newFeedback)
      .then( response => {
        console.log('Added successfully');
        this.handleChangePage();
      }).catch( error => {
        console.log('error adding book', error);
      })
    }
  
    handleChangePage = (event) => {
        //change page to comments page
        this.props.history.push( '/Page6' );
    }



    render() {
        console.log('summary', this.props.feeling[0]);
        return (
            <div>
                <h1>Review Your FeedBack</h1>
                <h3>Feelings: {this.props.feeling}</h3>
                <h3>Understanding: {this.props.understanding}</h3>
                <h3>Support: {this.props.support}</h3>
                <h3>Comments: {this.props.comments}</h3>
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    // reduxStore - this gives me the whole thing
    feeling: reduxStore.feeling,
    understanding: reduxStore.understanding,
    support: reduxStore.support,
    comments: reduxStore.comment,
   })

export default withRouter(connect(putReduxStateOnProps)(Page5));