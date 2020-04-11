import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page5 extends Component {
    render() {
        console.log('summary', this.props.comments);
        return (
            <div>
                <h1>Review Your FeedBack</h1>
                <h3>Feelings: {this.props.feeling}</h3>
                <h3>Understanding: {this.props.understanding}</h3>
                <h3>Support: {this.props.support}</h3>
                <h3>Comments: {this.props.comments}</h3>
                <button>Submit</button>
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