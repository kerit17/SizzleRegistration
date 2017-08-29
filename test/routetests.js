const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
    // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
    this.timeout('30s')

    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare({show : true})
    })

    describe('/ (Home Page)', () => {
        it('should load home page without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (About Page)', () => {
        it('should load about page without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/about')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })


    describe('/ (Student Page)', () => {
        it('should load student page without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/student')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (Student Sign Up Page)', () => {
        it('should load student-sign-up page without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/student-sign-up')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (Admin Page)', () => {
        it('should load student-sign-up page without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/admin')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })

    describe('/ (Admin Portal Page)', () => {
        it('should load student-sign-up page without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http:/localhost:8080/admin-portal')
        .wait(2000)
        .end()
        .then(function (result) { done() })
        .catch(done)
        })
    })
});