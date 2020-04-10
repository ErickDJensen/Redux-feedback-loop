import React, { Component } from 'react'

import {withRouter} from 'react-router-dom';

class Page3 extends Component {
    render() {
        return (
            <>
            <div>
                <h1>How well are you being supported?</h1>
            </div>
            <div>
            <h3>Support?</h3>
            <input type="number"></input><button>Next</button>
        </div>
        </>
        )
    }
}

export default withRouter(Page3);
