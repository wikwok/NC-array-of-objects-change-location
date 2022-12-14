const {
    updateRemoteStudents
} = require('../locations.js');

describe('updateRemoteStudents', () => {
    test('return back a different array', () => {
        const students = [];
        const expected = updateRemoteStudents(students);
        
        expect(expected).not.toBe(students);
        expect(expected).toEqual(students);
    })

    test('returns back a different array of objects with same values', () => {
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        const expected = updateRemoteStudents(students);
        
        expect(expected).not.toBe(students)
        //expect(expected).toEqual(students) /fails as we developed the function further.
    })

    test('return back a different array of objects with remote location added where found missing', () =>{
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
        const expected = updateRemoteStudents(students);
        const actual = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]

        expect(expected).not.toBe(students)
        expect(expected).toEqual(actual)
        expect(expected).toContainEqual({ name: 'Ramanujan', age: 22, location: 'remote' })
    })
})