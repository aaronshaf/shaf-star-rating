/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'
import Star from './star'

export default class Rate extends Component {
  constructor (props) {
    super(props)
    this.input = props.input
    this.state.value = this.input.value
  }

  handleChange (value) {
    this.setState({value})
  }

  render () {
    const starCount = Math.ceil(this.input.max || 5)
    const stars = []
    for (let x = 1; x <= starCount; x++) {
      const fillPercentage = this.state.value < x ? 0 : 100
      stars.push(
        <Star
          key={x}
          onChange={this.handleChange.bind(this, x)}
          fillPercentage={fillPercentage}
        />
      )
    }
    return (
      <ul class="shaf-rate" aria-hidden>
        {stars}
      </ul>
    )
  }
}

Rate.displayName = 'Rate'
