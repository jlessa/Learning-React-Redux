import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_COURSES:
            return action.courses;        
        default:
            return state;    
    }
}