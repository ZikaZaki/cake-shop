import React from "react";
// ==============================HOC================================================
// Higher Order Component (HOC) - A pattern where a function takes a component as
// an argument and returns a new component. The purpose of the HOC is to share
// common functionality between components without having to repeat code.
// Example:--------------------------------------------------------------- 
// const NewComponent = higherOrderComponent(originalComponent)
// const EnhancedComponent = higherOrderComponent(originalComponent)
// const IronMan = withSuit(TonyStark)
// -----------------------------------------------------------------------
// Resources: https://reactjs.org/docs/higher-order-components.html
// =================================================================================
const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component {
      constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }

      incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
      }

      render() {
        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        // return <WrappedComponent {...this.props} />
      }
    }

    return WithCounter
}

export default withCounter
