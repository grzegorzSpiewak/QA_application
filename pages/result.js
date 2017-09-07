'use strict'
import React from 'react'
/**
 * Components
 */
import CompareResults from '../components/Forms/CompareResults'
/**
 * Content
 */
import TestCases from '../data/TestCases'

export default class Result extends React.Component {
  static getInitialProps ({ query }) {
    const testName = query.name.split('" "')
    const testNameData = TestCases[testName]
    return { testNameData, testName }
  }

  render () {
    const testNameData = this.props.testNameData
    const testName = this.props.testName
    return (
      <div>
        <h1>This is {testName} test case</h1>
        <CompareResults { ...testNameData } />
        {console.log(testNameData)}
      </div>
    )
  }
}
