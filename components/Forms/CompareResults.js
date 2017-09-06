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

  onFormSubmit(e) {
    e.preventDefault()
    const queryParams = this.state.select.testSuite
    queryParams? this.routerHandler(queryParams) : console.log('nie wybrales daty')
  }

  handleVariables(e) {
    const select = this.state.select
    select.testResults = e.target.value
    this.setState({
      testResults: select
    });
  }

  compareResults(e) {
    const callVar = this.props
    const testedVar = this.state.testResults
    const valuesToString = JSON.stringify(testedVar.testResults.split(' '))
    const clean = valuesToString.replace(/(?:\\[rn]|[\r\n]+)+/g, '", "')
    const cleanNoMarks = clean.replace(/([^:]*):/g,'$1').split('.').join('').toLowerCase()
    const varToCheck = JSON.parse(cleanNoMarks).sort()
    const varDefined = Object.keys(callVar).map(key => callVar[key])
    const definedString = JSON.stringify(varDefined)
    const definedNoMarks = definedString.replace(/([^:]*):/g,'$1').split('.').join('').toLowerCase()
    const varDefinedSure = JSON.parse(definedNoMarks).sort()
    const missingVar = []

    if (varDefinedSure.length !== varToCheck.length) {
      varToCheck.forEach(varName => {
        if(!varDefinedSure.includes(varName)) {
          missingVar.push(varName)
        } else {
          console.log("variable is in call")
        }
      })
    }
    console.log(missingVar)
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
                onClick={ this.compareResults.bind(this) }
              />

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default CompareResults;
