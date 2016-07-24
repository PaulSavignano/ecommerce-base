import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductsList from '../containers/products-list.js'

export const Products = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Products</h4>
      <ProductsList />
    </Col>
  </Row>
)
