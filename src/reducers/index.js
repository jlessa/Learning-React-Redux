import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses // shorthand property names ES6
});

export default rootReducer;