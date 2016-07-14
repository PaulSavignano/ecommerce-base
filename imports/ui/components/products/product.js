import React from 'react'
import { Row, Col, ListGroupItem, Form, FormControl, Button, ControlLabel } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { updateProductName, updateProductPrice, updateProductDescription, removeProduct } from '../../../api/products/methods.js'

const handleUpdateProductName = (productId, event) => {
  const name = event.target.value.trim()
  if (name !== '' || event.keyCode === 13) {
    updateProductName.call({
      _id: productId,
      update: { name },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Name updated!', 'success')
      }
    })
  }
}

const handleUpdateProductPrice = (productId, event) => {
  const priceString = event.target.value.trim()
  const price = parseInt(priceString, 10)
  if (price !== '' || event.keyCode === 13) {
    updateProductPrice.call({
      _id: productId,
      update: { price },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Price updated!', 'success')
      }
    })
  }
}

const handleUpdateProductDescription = (productId, event) => {
  const description = event.target.value.trim()
  if (description !== '' || event.keyCode === 13) {
    updateProductDescription.call({
      _id: productId,
      update: { description },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Description updated!', 'success')
      }
    })
  }
}

const handleRemoveProduct = (productId, event) => {
  event.preventDefault()
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeProduct.call({
      _id: productId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Product removed!', 'success')
      }
    })
  }
}

export const Product = ({ product }) => (
  <ListGroupItem key={ product._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Form horizontal>
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              standalone
              defaultValue={ product.name }
              onBlur={ handleUpdateProductName.bind(this, product._id) }
            />
          </Col>

          <Col componentClass={ControlLabel} sm={2}>
            Price
          </Col>
          <Col sm={10}>
            <FormControl
              type="number"
              standalone
              defaultValue={ product.price }
              onBlur={ handleUpdateProductPrice.bind(this, product._id) }
            />
          </Col>

          <Col componentClass={ControlLabel} sm={2}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              standalone
              defaultValue={ product.description }
              onBlur={ handleUpdateProductDescription.bind(this, product._id) }
            />
          </Col>

        </Form>
      </Col>
        <Col xs={ 4 } sm={ 2 }>
          <Button
            bsStyle="danger"
            className="btn-block"
            onClick={ handleRemoveProduct.bind(this, product._id) }>
            Remove
          </Button>
      </Col>
    </Row>
  </ListGroupItem>
)
