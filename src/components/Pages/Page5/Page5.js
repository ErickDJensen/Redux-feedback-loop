import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Page5 extends Component {
    render() {
        return (
            <div>
                <h1>Review Your FeedBack</h1>
                <button>Submit</button>
            </div>
        )
    }
}

export default withRouter(connect()(Page5));