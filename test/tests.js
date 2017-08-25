const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('5s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('/ (Home Page)', () => {
    it('should load home without error', done => {
      nightmare.goto('http:/localhost:8080')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

    describe('/ (Load admin Page)', () => {
    it('should load admin page without error', done => {
      nightmare.goto('http:/localhost:8080/admin')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  
  describe('/ (Load student Page)', () => {
    it('should load student page without error', done => {
      nightmare.goto('http:/localhost:8080/student')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

  describe('/ (Load registration Page)', () => {
    it('should load registration page without error', done => {
      nightmare.goto('http:/localhost:8080/student')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })

})



