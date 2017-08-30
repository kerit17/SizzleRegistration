const Nightmare = require('nightmare');
const assert = require('assert');

describe('Load a Page', function() {
    // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
    this.timeout('30s')

    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare({show : true})
    })

    describe('/ (Student Button)', () => {
        it('should click the student button element', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
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
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/student')
        .wait(2000)
        .click('#student-sign-in')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
})


    describe('/ (New Student Button)', () => {
        it('should click the new student button element', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/student')
        .wait(1000)
        .click('#student-sign-up')
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
})

    describe('/ (New Student Button)', () => {
        it('should click the new student button element', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/student')
        .wait(1000)
        .click('#student-sign-up')
        .wait(1000)
        .type('#fName', 'Bobby')
        .type('#lName', 'Tester')
        .type('#email', 'bobbyt@aol.com')
        .type('#phone', '111-111-1111')
        // .type('#passsword', 'test')
        .wait(1000)
        .click('#newStudentSubmit')
        .wait(1000)
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
})


});






