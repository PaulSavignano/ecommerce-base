/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai'
import { Products } from './products.js'

describe('Documents collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Products, 'object')
  })
})
