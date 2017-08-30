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

    describe('/ (Button Clicking)', () => {
        it('should click the button element', done => {
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


    describe('/ (Button Clicking)', () => {
        it('should click the button element', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/student')
        .wait(2000)
        .click('#student-sign-up')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
})


});






