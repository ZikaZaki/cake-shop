import React, { Component } from "react"
// ================== Error Boundary =============================================================
// Error Boundaries are React components that catch JavaScript error in their child component tree,
// log those errors, and display a fall-back UIy a fallback UI instead of the component tree that 
// crashed. A class component becomes an Error Boundary if it defines either (or both) of the
// lifecycle methods static getDerivedStateFromError(error) or componentDidCatch(error, info).
// NOTE: Error boundaries catch errors during rendering, in lifecycle methods, and in constructors
// of the whole tree below them, but NOT errors in the Event Handlers.
// ===============================================================================================
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
        hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log('Error msg from componentDidCatch: ', error)
    console.log('Error info from componentDidCatch: ', info)
  }

  render() {
    if(this.state.hasError) {
        return <h1>Something went wrong!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
