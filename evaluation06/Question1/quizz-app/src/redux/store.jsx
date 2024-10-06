import{createStore, applyMiddleware} from 'redux'
import quizReducer from './quizReducer'
import {thunk} from 'redux-thunk'

export const store = createStore(quizReducer, applyMiddleware(thunk))