import React, { Component } from "react"

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        // This is the third approach using bind in the constructor to bind EventHandlers, 
        // it's the best approach compared to the other two approaches.
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this)
    // }

    // This is the fourth approach defining the EventHandlers as arrow functions.
    // Although, it's the best approach compared to the other two approaches, it still experimental.
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* This is the first approach, but it's not recommended, cause it recreates
                 the function every time the component is rendered.  */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* This is the second approach using arrow func, but it also has some performance implications */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* This is the third approach,  using bind in the constructor to bind EventHandlers  */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}