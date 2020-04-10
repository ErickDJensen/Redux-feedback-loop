import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

class Page2 extends Component {
    render() {
        return (
            <>
            <div>
                <h1>How well are you understanding the content?</h1>
            </div>
            <div>
            <h3>Understanding?</h3>
            <input type="number"></input><button>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(Page2);
