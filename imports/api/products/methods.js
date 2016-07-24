import { Products } from './products'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit.js'

export const insertProduct = new ValidatedMethod({
  name: 'products.insert',
  validate: new SimpleSchema({
    name: { type: String },
    price: { type: Number, decimal: true },
    description: { type: String },
    image: { type: String },
  }).validator(),
  run(product) {
    Products.insert(product)
  },
})

export const updateProductName = new ValidatedMethod({
  name: 'products.name.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.name': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Products.update(_id, { $set: update })
  },
})

export const updateProductPrice = new ValidatedMethod({
  name: 'products.price.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.price': { type: Number, decimal: true, optional: true },
  }).validator(),
  run({ _id, update }) {
    Products.update(_id, { $set: update })
  },
})

export const updateProductDescription = new ValidatedMethod({
  name: 'products.description.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.description': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Products.update(_id, { $set: update })
  },
})

export const updateProductImage = new ValidatedMethod({
  name: 'products.image.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.image': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Products.update(_id, { $set: update })
  },
})

export const removeProduct = new ValidatedMethod({
  name: 'products.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Products.remove(_id)
  },
})

rateLimit({
  methods: [
    insertProduct,
    updateProductName,
    updateProductPrice,
    updateProductDescription,
    removeProduct,
  ],
  limit: 5,
  timeRange: 1000,
})
