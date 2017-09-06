'use strict'
import React from 'react'
/**
 * Components
 */
import SelectSuite from '../components/Forms/SelectSuite'
/**
 * Content
 */
import Homepage from '../data/Homepage'

export default class extends React.Component {

  render () {
    return (
      <div>
        <SelectSuite { ...Homepage }/>
      </div>
    )
  }
}
