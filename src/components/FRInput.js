import React from "react"

// =================================================================================================
// NOTE: A way to use React.forwardRef() method without using the arrow function syntax.
// =================================================================================================
// const FRInput = React.forwardRef(function FRInput(props, ref) {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// })

// =================================================================================================
// NOTE: In order to use the Forwarding Refs, we need to use the React.forwardRef() method, which
// accepts a function as a parameter. This function receives props and ref as parameters.
// CAREFUL!!! It's recommended to define the component using the arrow function syntax with (props, ref) as
// parameters, otherwise it won't work.
// =================================================================================================
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default FRInput
