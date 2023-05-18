import React, { Component } from "react"
// ===================================RENDER PROPS===================================
// NOTE: The term "render prop" refers to a technique for sharing code between
// React components using a prop whose value is a function.
// A component with a render prop takes a function that returns a React element
// and calls it instead of implementing its own render logic. Using the name render
// prop is just a convention, you can use any prop name you want. In fact, there's 
// a variation of this pattern called function as child components, which uses the
// children prop instead of render. The children prop is a common pattern which used 
// by React to pass the child elements of a component. For example, we pass the function
// in between the opening and closing tags of the component. Next, we call that function 
// from inside the component using this.props.children. 
// ==================================================================================
class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
        return { count: prevState.count + 1}
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter
