import React, { Component } from "react"
import Input from "./Input"

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    // NOTE: the focusInput method is defined in the Input component
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        {/* ============================================================================== 
            NOTE: It's possible to use ref with child component from a parent component, 
            but only with CLASS components (not FUNCTION components)
            ============================================================================== */}
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
