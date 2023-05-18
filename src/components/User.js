import React, { Component } from "react"
// ===================================RENDER PROPS===================================
// NOTE: The term "render prop" refers to a technique for sharing code between
// React components using a prop whose value is a function.
// ==================================================================================
class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default User
