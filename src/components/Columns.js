import React from "react"

function Columns() {
  const items = [
    {
        id: 1,
        name: "ZikaZaki",
    },
    {
        id: 2,
        name: "Mario",
    },
    {
        id: 3,
        name: "Zack",
    }
  ]
  return (
    // The only limitation to the shorthand syntax is that it does not support keys as props or any other attributes.
    <>
        {
            items.map((item) => (
                <React.Fragment key={item.id}>
                    <th>Title</th>
                    <td>{item.name}</td>
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>ZikaZaki</td>
    </>
  )
}

export default Columns
