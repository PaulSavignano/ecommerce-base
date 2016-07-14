import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertProduct } from '../../../api/products/methods.js'

const handleInsertProduct = (event) => {
  const target = event.target
  const name = target.value.trim()
  const price = 0
  const description = 'example description'

  if (name !== '' && event.keyCode === 13) {
    insertProduct.call({
      name, price, description,
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

export const AddProduct = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertProduct }
      placeholder="Type a product title and press enter..."
    />
  </FormGroup>
)
