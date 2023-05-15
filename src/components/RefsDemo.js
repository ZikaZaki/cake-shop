import React, { Component } from "react"

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    // =========================================Refs with Callback=========================================
    // This is an old approach for using refs, by defining a callback function in the constructor
    //  and passing it to the cbRef.
    // NOTE: This approach is not recommended, cause it's not compatible with async rendering.
    // ====================================================================================================
    this.setCbRef = element => {
        this.cbRef = element
    }
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
    if(this.cbRef) {
        this.cbRef.focus()
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        {/* First approach for using refs, using the React.createRef() and passing it to the inputRef */}
        <input type="text" ref={this.inputRef} />
        {/* Second approach for using refs, using the callback function setCbRef(element) and passing it to the cbRef */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
