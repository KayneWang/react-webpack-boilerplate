import React from 'react'
import { hot } from 'react-hot-loader'
import Router from './router/router'

class App extends React.Component {
  state = {
    hasError: false
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(err, info) {
    console.log(err, info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>页面崩溃了</h1>
    }
    return (
      <Router />
    )
  }
}

export default hot(module)(App);