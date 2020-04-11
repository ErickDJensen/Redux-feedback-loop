import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Bring in Redux Logger
import logger from 'redux-logger';
import { HashRouter as Router } from 'react-router-dom';
// Bring in Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const initState = {
    feeling: [],
    understanding: [],
    support: [],
    comment: [],
}

const feeling = (state=initState, action) => {
    if(action.type === 'ADD_FEELING') {
        console.log('feeling number', action.payload)
        return[...state.feeling, action.payload]
    }
    return state;
}

const understanding = (state=initState, action) => {
    if(action.type === 'ADD_UNDERSTAND') {
        console.log('understanding number', action.payload)
        return[...state.understanding, action.payload]
    }
    return state;
}

const support = (state=initState, action) => {
    if(action.type === 'ADD_SUPPORT') {
        console.log('support number', action.payload)
        return[...state.support, action.payload]
    }
    return state;
}

const comment = (state=initState, action) => {
    if(action.type === 'ADD_COMMENT') {
        console.log('comment', action.payload)
        return[...state.comment, action.payload]
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment,
    }), //Add reducer functions to combineReducers
    applyMiddleware(logger) //Add our middleware logger
);

storeInstance.subscribe( () => {
    console.log('State Updated');
    console.log(storeInstance.getState());
})



ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));

registerServiceWorker();
