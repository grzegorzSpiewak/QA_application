'use strict'
import React from 'react'
/**
 * Components
 */
import SelectSuite from '../components/Forms/SelectSuite'
/**
 * Content
 */
import MainPageContent from '../data/MainPage'

export default class extends React.Component {

  render () {
    return (
      <div>
        <SelectSuite { ...MainPageContent }/>
      </div>
    )
  }
}
