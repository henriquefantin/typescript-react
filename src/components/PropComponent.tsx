import React from 'react'

interface Props {
    name: string
}

const PropComponent = (props: Props) => {
  return (
    <div>
        <p>Component props</p>
        <p>O nome é {props.name}</p>
    </div>
  )
}

export default PropComponent