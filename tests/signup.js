/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

describe('Sign Up', function () {
  beforeEach(function () {
    server.execute(function () {
      const { Meteor } = require('meteor/meteor')
      const user = Meteor.users.findOne({ 'emails.address': 'paul.savignano@abc.com' })
      if (user) {
        Meteor.users.remove(user._id)
      }
    })
  })

  it('should create a new user and login with redirect to index @watch', function () {
    browser.url('http://localhost:3000/signup')
           .setValue('[name="firstName"]', 'Paul')
           .setValue('[name="lastName"]', 'Savignano')
           .setValue('[name="emailAddress"]', 'paul.savignano@abc.com')
           .setValue('[name="password"]', 'password')
           .submitForm('form')

    browser.waitForExist('.jumbotron')
    expect(browser.getUrl()).to.equal('http://localhost:3000/')
  })
})
