import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertProduct } from '../../../api/products/methods.js'

const handleInsertProduct = (event) => {
  const target = event.target
  const name = target.value.trim()
  const price = 9.95
  const description = 'example description'
  const image = 'https://placeholdit.imgix.net/~text?txtsize=30&txt=320%C3%97150&w=320&h=150'

  if (name !== '' && event.keyCode === 13) {
    insertProduct.call({
      name, price, description, image,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        target.value = ''
        Bert.alert('Product added!', 'success')
      }
    })
  }
}

export const InsertProduct = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertProduct }
      placeholder="Type a product title and press enter..."
    />
  </FormGroup>
)
