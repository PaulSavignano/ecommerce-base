import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CartProductsList from '../containers/cart-products-list.js'

export const Cart = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Cart</h4>
      <CartProductsList />
    </Col>
  </Row>
)
