import Router from 'next/router'
import React, {Component} from 'react'

class SelectSuite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '/result',
      select: {
        testSuite: '',
      }
    }
    this.handleSuite = this.handleSuite.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  routerHandler(data) {
    const query = data.replace(/ /g, "")
    Router.push({
      pathname: this.state.redirect,
      query: { name: query },
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    const queryParams = this.state.select.testSuite
    queryParams? this.routerHandler(queryParams) : console.log('no test selected')
  }

  handleSuite(e) {
    const select = this.state.select
    select.testSuite = e.target.value
    this.setState({
      testSuite: select
    });
  }

  renderOptions(items) {
    return items.map((item, i) =>
      <option key={i} data-test-name={`${item.value}`}>{item.name}</option>
    )
  }

  render() {
    return (
      <section className="select">
        <div className="wrap">
          <div>
            <form className="select__form" id="select" onSubmit={ this.onFormSubmit.bind(this) }>
              <select name="test-suite" className="select__form__test" onChange={ this.handleSuite }>
                <option value="" defaultValue>Select test suite</option>
                {this.renderOptions(this.props.select.suites)}
              </select>

              <input
                type="submit"
                value="Go"
                name="submit_form"
                className="button select__form__submit"
              />

            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SelectSuite;
