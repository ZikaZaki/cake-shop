import React, { Component } from "react"
import Input from "./Input"

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    // Note: the focusInput method is defined in the Input component
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput