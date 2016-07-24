import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductsList from '../containers/products-list-admin.js'
import { InsertProduct } from '../components/products-admin/insert-product.js'

export const ProductsAdmin = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Products Admin</h4>
      <InsertProduct />
      <ProductsList />
    </Col>
  </Row>
)
