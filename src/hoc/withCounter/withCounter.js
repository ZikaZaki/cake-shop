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
const withCounter = (WrappedComponent, incrementValue = 1) => {
    class WithCounter extends React.Component {
      constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }

      incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + incrementValue }
        })
      }

      render() {
        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        // ======================================{...this.props}=====================================================
        // NOTE: If we try to pass the props to the wrapped component, we will not be able to access
        // the props in the wrapped component. This is because the props are being overwritten by the
        // higher order component. Therefore, we need to pass the remaining props to the wrapped component
        // using the spread operator.
        // Example:
        // return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        // ==========================================================================================================
      }
    }

    return WithCounter
}

export default withCounter
