import React, { Component } from 'react'
import { Row, Col, ListGroupItem, Form, FormControl, Button, ControlLabel, Thumbnail } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertCartProduct } from '../../../api/cart/methods.js'

const handleInsertCartProduct = (productId) => {
  const quantity = this.refs.quantity.value.trim()
  if (quantity !== '' || event.keyCode === 13) {
    insertCartProduct.call({
      _id: productId,
      update: { quantity },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Quantity updated!', 'success')
      }
    })
  }
}

export class Product extends Component {
  render() {
    const { product } = this.props
    console.log(product.price)
    return (
      <ListGroupItem key={ product._id }>
        <Row>
          <Col xs={ 4 } sm={ 5 }>
            <Thumbnail src={ product.image } />
          </Col>
          <Col xs={ 4 } sm={ 5 }>
            <h2>{ product.name }</h2>
            <p>$ { product.price }</p>
            <p>{ product.description }</p>
          </Col>
          <Col xs={ 4 } sm={ 2 }>
            <Row>
              <FormControl
                ref="quantity"
                type="number"
                standalone
              />
            </Row>
            <Row>
              <Button
                bsStyle="success"
                className="btn-block"
                onClick={ handleInsertCartProduct.bind(this, product._id) }>
                Add To Cart
              </Button>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}
