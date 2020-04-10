import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

class Page4 extends Component {
    render() {
        return (
            <>
            <div>
                <h1>Any comments you want to leave?</h1>
            </div>
            <div>
            <h3>Comments</h3>
            <input type="text"></input><button>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(Page4);
