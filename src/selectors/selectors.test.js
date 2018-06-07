import expect from 'expect';
import {authorsFormatted} from './selectors';

describe('Selectors', () => {
    describe('AuthorSelectorsFormatted', () => {
        it('should return author data formatted for use in dropdown',() => {
            const authors = [
                {id: 'author-one', firstName: 'Author', lastName: 'One'},
                {id: 'author-two', firstName: 'Author', lastName: 'Two'}
            ];

            const expected = [
                {value: 'author-one', text: 'Author One'},
                {value: 'author-two', text: 'Author Two'}
            ];

            expect(authorsFormatted(authors)).toEqual(expected);
        });
    });
});