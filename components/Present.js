'use strict';
import React from 'react'

const renderItems = (items) => {
  const itemsValue = Object.keys(items).map(key => items[key])

  return itemsValue.map((item, i) =>
    <li key={i}>{item}</li>
  )
}

const Present = (props) => (
  <section>
    <h1>Following variables are present</h1>
      <ul>
        {renderItems(props)}
      </ul>
  </section>
)

export default Present
