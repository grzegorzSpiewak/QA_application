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
    this.compareResults = this.compareResults.bind(this);
  }

  handleVariables (e) {
    const select = this.state.select
    select.testResults = e.target.value
    this.setState({
      testResults: select
    })
  }

  makeEqualObj (obj) {
    const makeString = JSON.stringify(obj)
    const cleanString = makeString.replace(/(?:\\[rn]|[\r\n]+)+/g, '", "')
    const makeObj = JSON.parse(cleanString).sort()
    return makeObj
  }

  compareResults (e) {
    e.preventDefault()
    const requiredVar = this.props.variables
    const checkVar = this.state.testResults
    const checkVarClean = this.makeEqualObj(checkVar.testResults.split(' '))
    const requiredVarValues = Object.keys(requiredVar).map(key => requiredVar[key])
    const requiredVarClean = this.makeEqualObj(requiredVarValues)
    const missingVar =[]
    const presentVar =[]

    if(requiredVarClean.length !== checkVarClean.length || checkVarClean.length !== requiredVarClean.length) {
      requiredVarClean.forEach(varName => {
        if(!checkVarClean.includes(varName)) {
          missingVar.push(varName);
        } else {
          presentVar.push(varName)
        }
      })
    }
    this.setState({
      missingVar,
      presentVar
    });
  }

  render () {
    return (
      <section className="compare">
        <div className="wrap">
          <div>
            <h1 className="compare__header">Copy and paste variables from saved logs</h1>
            <form className="compare__form" id="compare">
              <textarea onChange={ this.handleVariables }/>
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
