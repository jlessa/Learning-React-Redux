import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function courseReducer(state = initalState.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES:
            return action.courses;        
        case types.CREATE_COURSE:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;    
    }
}