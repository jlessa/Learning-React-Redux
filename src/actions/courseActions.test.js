import expect from 'expect';
import * as courseActions from './courseActions';
import * as actionTypes from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
    describe('createCoursesAction', () => {
      it('should create a CREATE_COURSE_SUCCESS action', () => {
        const course = {id:'clean-code', title:'Clean Code'};
        const expectedAction = {
            type: actionTypes.CREATE_COURSE,
            course: course
        };

        const action = courseActions.createCourseSuccess(course);

        expect(action).toEqual(expectedAction);
      });      
    });    
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        const course = {id:'clean-code', title: 'Clean Code'};
        
        const expectedActions = [
            {type: actionTypes.BEGIN_AJAX_CALL},
            {type: actionTypes.LOAD_COURSES, body:{courses:[course]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(actionTypes.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(actionTypes.LOAD_COURSES);
            done();
        });
    });    
});
