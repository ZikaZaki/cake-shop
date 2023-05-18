import React, { Component } from "react"
import CompF from "./CompF"
import UserContext from "./userContext"

class CompE extends Component {
  
  static contextType = UserContext

  render() {
    return (
        <div>
            Component E Context {this.context}
            <CompF />
        </div>
    )
  }
}
// ================================================================================
// NOTE: Instead of using the below line, we can use the public static contextType
// property on the class to consume the context.
// --------------------------------------------------------------------------------
// NOTE: There are two limitations to using the contextType property:
// 1. It can only be used with class components.
// 2. You can only subscribe to a single context using contextType.
// --------------------------------------------------------------------------------
// RECOMMENDED: Use the useContext hook instead. See CompF.js for an example.
// ================================================================================

// CompE.contextType = UserContext

export default CompE
