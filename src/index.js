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


//reducer for feeling
const feeling = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('feeling number', action.payload)
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_STORE') {
        const updatedState = [];
        return updatedState;
    }
    return state;
}
//reducer for understanding
const understanding = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTAND') {
        console.log('understanding number', action.payload)
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_STORE') {
        const updatedState = [];
        return updatedState;
    }
    return state;
}
//reducer for support
const support = (state = [], action) => {
    if (action.type === 'ADD_SUPPORT') {
        console.log('support number', action.payload)
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_STORE') {
        const updatedState = [];
        return updatedState;
    }
    return state;
}
//reducer for comments
const comment = (state = [], action) => {
    if (action.type === 'ADD_COMMENT') {
        console.log('comment', action.payload)
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_STORE') {
        const updatedState = [];
        return updatedState;
    }
    return state;
}

//redux store
const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment,

    }), 
    applyMiddleware(logger) //Add our middleware logger
);

storeInstance.subscribe(() => {
    console.log('State Updated');
    console.log('in state', storeInstance.getState());
})



ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));

registerServiceWorker();
