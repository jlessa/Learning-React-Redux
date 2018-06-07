import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer'

const rootReducer = combineReducers({
    courses, // shorthand property names ES6
    authors
});

export default rootReducer;