const Nightmare = require('nightmare');
const assert = require('assert');

describe('Load a Page', function() {
    this.timeout('30s')

    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare({show : true})
    })

    describe('/ (Student Button)', () => {
        it('should click the student button element', done => {
        nightmare.goto('http:/localhost:8080')
        .wait(1000)
        .click('.pure-button-primary')
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (Click Sign In)', () => {
        it('should click the sign in button element', done => {
        nightmare.goto('http:/localhost:8080/student')
        .wait(2000)
        .click('#student-sign-in')
        .title()
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })


    describe('/ (New Student Button)', () => {
        it('should click the new student button element', done => {
        nightmare.goto('http:/localhost:8080/student')
        .wait(1000)
        .click('#student-sign-up')
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })


    describe('/ (Create new student)', () => {
        it('should fill in form fields to create new student', done => {
        nightmare.goto('http:/localhost:8080/student')
        .wait(1000)
        .click('#student-sign-up')
        .wait(1000)
        .type('#fName', 'Bobby')
        .type('#lName', 'Tester')
        .type('#email', 'bobbyt@aol.com')
        .type('#phone', '111-111-1111')
        .type('input[type=password]', '1234567')
        .wait(1000)
        .click('#newStudentSubmit')
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (Create new course)', () => {
        it('should create new course', done => {
        nightmare.goto('http:/localhost:8080/admin-portal')
        .click('#addCoursePageBtn')
        .type('#newCourseName', 'Principles of Italian Cooking')
        .type('#newCourseDescription', 'Gnocchi, Osso Bucco, Pasta Making, Sauces, etc.')
        .select('#newLocation', 'Main Kitchen Lab 1')
        .click('#adminAddCourse')
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (Register for course)', () => {
        it('should successfully select courses for which the student wishes to register', done => {
        nightmare.goto('http:/localhost:8080/registration')
        .check('#stuCourseData > fieldset:nth-child(2) > label')
        .click('#newCourseRegistration')
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })
});






