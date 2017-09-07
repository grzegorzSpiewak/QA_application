import Router from 'next/router'
import React, {Component} from 'react'

class CompareResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: {
        testResults: '',
      }
    }
    this.handleVariables = this.handleVariables.bind(this)
    this.compareResults = this.compareResults.bind(this);
  }

  handleVariables(e) {
    const select = this.state.select
    select.testResults = e.target.value
    this.setState({
      testResults: select
    })
  }

  makeEqualObj(obj) {
    const makeString = JSON.stringify(obj)
    const cleanString = makeString.replace(/(?:\\[rn]|[\r\n]+)+/g, '", "')
    const makeObj = JSON.parse(cleanString).sort()
    return makeObj
  }

  compareResults(e) {
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
          console.log("dziala")
          missingVar.push(varName)
        } else {
          presentVar.push(varName)
        }
      })
    }
    console.log("Those var are missing from call " + missingVar)
    console.log("Those var are present in call " + presentVar)
  }

  render() {
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
          </div>
        </div>
      </section>
    )
  }
}

export default CompareResults;
