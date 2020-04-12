import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import axios from 'axios';

class Page5 extends Component {

    //function to POST feedback 
    handleSubmit = (event) => {
        event.preventDefault();
        let newFeedback = {
            feeling: this.props.feeling[0],
            understanding: this.props.understanding[0],
            support: this.props.support[0],
            comments: this.props.comments[0],
        }
        console.log(`Adding feedback`, newFeedback);
        axios.post('./feedback', newFeedback)
            .then(response => {
                console.log('Added successfully');
                this.handleChangePage();
            }).catch(error => {
                console.log('error adding feedback', error);
            })
    }
    //function to move to next page
    handleChangePage = (event) => {
        //change page to comments page
        this.props.history.push('/Page6');
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
    feeling: reduxStore.feeling,
    understanding: reduxStore.understanding,
    support: reduxStore.support,
    comments: reduxStore.comment,
})

export default withRouter(connect(putReduxStateOnProps)(Page5));