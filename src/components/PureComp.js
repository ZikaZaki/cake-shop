import React, { PureComponent } from "react"

// Remember to NOT mutate OBJECTS or ARRAYS in state or props when using PureComponent,
// because it does a shallow comparison of state and props.
// Instead make copies of those objects or arrays, using the spread operator or Object.assign().
// =================================================================================================
// NOTE: It's a best-practice to ensure that all children of PureComponent are also PureComponents.
// =================================================================================================
class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render")

    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp
