import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import AppNavigation from '../containers/app-navigation'

export class App extends Component {
  render() {
    return (
      <div>
        <AppNavigation />
        <Grid>
          { this.props.children }
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
}
