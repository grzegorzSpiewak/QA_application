'use strict'
import React from 'react'
/**
 * Components
 */
import CompareResults from '../components/Forms/CompareResults'
/**
 * Content
 */
import Homepage from '../data/Homepage'

export default class Result extends React.Component {
  static getInitialProps ({ query }) {
    const testName = query.name.split('" "')
    const testData = Homepage[testName]
    console.log(testName)
    return { testData }
  }

  render () {
    const testValues = this.props.testData
    return (
      <div>
        <CompareResults { ...testValues }/>
        {console.log(this.props)}
      </div>
    )
  }
}
