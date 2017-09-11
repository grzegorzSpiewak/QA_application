import Router from 'next/router'
import React, {Component} from 'react'

import Missing from '../Missing'
import Present from '../Present'

class CompareResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      select: {
        testResults: '',
      }
    }
    this.handleVariables = this.handleVariables.bind(this)
    this.compareResults = this.compareResults.bind(this)
    this.handlePasteData = this.handlePasteData.bind(this)
  }

  handleVariables (e) {
    const select = this.state.select
    select.testResults = e.target.value
    this.setState({
      testResults: select
    })
  }

  handlePasteData (value) {
    const data = JSON.stringify(value)
    const pairs =  data.replace(/(?:\\[rn]|[\r\n]+)+/g, '", "')
    const cleanPairs = pairs.replace(/\\t/g, ' ')
    const dataCheck = []

    cleanPairs.split(', ').map(elem => elem.replace(/(^"|"$)/g, "")).map(elem => {
      const splitPairs = elem.split(' ')
      let name = splitPairs[0]
      let value = splitPairs[1]
      if (splitPairs.length > 2) {
        name = splitPairs[0]
        value = splitPairs.splice(1).join(' ')
      }
      const pairsToCheck = {
        varName: name,
        varValue: value
      }
      dataCheck.push(pairsToCheck)
    })
    return dataCheck
  }

  compareResults (e) {
    e.preventDefault()
    const varRequired = this.props.variables
    const pasteData = this.state.select.testResults
    const varToCheck = this.handlePasteData(pasteData)
    const missingVar = []
    const presentVar = []

    if(varToCheck.length !== varRequired.length) {
      varToCheck.map(checkName => {
        if(varRequired.includes(checkName.varName)) {
          console.log("tak")
        } else {
          console.log(checkName)
        }
      })
    }
  }

  render () {
    return (
      <section className="compare">
        <div className="wrap">
          <div>
            <h1 className="compare__header">Copy and paste variables from saved logs</h1>
            <form className="compare__form" id="compare">
              <textarea onChange={ this.handleVariables.bind(this) }/>
              <input
                type="button"
                value="Compare"
                name="compare_results"
                className="button compare__form__submit"
                onClick={ this.compareResults.bind(this) }/>
            </form>
            { this.state && this.state.missingVar ? <Missing {...this.state.missingVar} /> : null }
            { this.state && this.state.presentVar ? <Present {...this.state.presentVar} /> : null }
          </div>
        </div>
      </section>
    )
  }
}

export default CompareResults;
