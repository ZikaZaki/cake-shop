import React from "react"

function MemoComp({ name }) {
  console.log("Rendering Memo Component")

  return (
    <div>
        <h1>Memo Component - name: {name} - {Date.now()}</h1>
    </div>
  )
}

export default MemoComp
