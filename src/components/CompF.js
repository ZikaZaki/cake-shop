import React, { Component } from "react"
import { UserConsumer } from "./userContext"
// ================================================================================
// NOTE: There are 2 ways to consume context in React. The first way is to use the
// Consumer component from React. The second way is to use the useContext hook.
// Example of using the useContext hook:--------------------------------------------
// import React, { useContext } from "react"
// import { UserContext } from "./userContext"
// 
// const user = useContext(UserContext) { return <div>Hi {user} from CompF</div> }
// ---------------------------------------------------------------------------------
// ================================================================================

class CompF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hi {username} from CompF</div>
        }}
      </UserConsumer>
    )
  }
}

export default CompF
