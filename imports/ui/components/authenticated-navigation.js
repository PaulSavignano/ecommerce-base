import React from 'react'
import { browserHistory } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Nav, NavItem, NavDropdown, MenuItem, Glyphicon, Badge } from 'react-bootstrap'
import { Meteor } from 'meteor/meteor'

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'))

const userName = () => {
  const user = Meteor.user()
  const name = user && user.profile ? user.profile.name : ''
  return user ? `${name.first} ${name.last}` : ''
}

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
      </LinkContainer>
      <LinkContainer to="/products">
        <NavItem eventKey={ 3 } href="/products">Products</NavItem>
      </LinkContainer>
      <LinkContainer to="/admin/products">
        <NavItem eventKey={ 4 } href="/admin/products">Products Admin</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 5 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 5.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
      <LinkContainer to="/cart">
        <NavItem eventKey={ 6 } href="/cart">
          <Glyphicon glyph="shopping-cart" />
          <Badge>1</Badge>
        </NavItem>
      </LinkContainer>
    </Nav>
  </div>
)
