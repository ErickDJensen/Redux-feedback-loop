import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

export class Page6 extends Component {
    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <button>Leave New Feedback</button>
            </div>
        )
    }
}

export default withRouter(connect()(Page6));
