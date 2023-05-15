import React from "react"
import ReactDOM from "react-dom"

function PortalDemo() {
// =================================================================================================
// We need to render this component outside the default node of the React app (root div),
// so we need to create a portal using ReactDOM.createPortal() method which accepts two
// parameters: the first one is the component to be rendered and the second one is the
// node where the component will be rendered.
// NOTE: the portal is rendered in a separate node in the DOM. That's why it's not affected
// by the React tree and it won't be affected by the scroll position.
// USE-CASES: Portals are useful when having to deal with parent component CSS and the child component
// is a MODAL, a POPUP or a TOOLTIP. See examples created by Kent C. Dodds: https://codesandbox.io/s/00254q4n6p
// =================================================================================================
  return ReactDOM.createPortal(
    <div>
        <h1>Portals Demo</h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default  PortalDemo
