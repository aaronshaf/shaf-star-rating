/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'
import Star from './star'

export default class Rate extends Component {
  constructor (props) {
    super(props)
    this.input = props.input
    this.state.value = this.input.value
    this.state.hoverIndex = 0
  }

  handleHover (hoverIndex) {
    this.setState({hoverIndex})
  }

  handleChange (value) {
    this.input.value = value

    const event = document.createEvent('HTMLEvents')
    event.initEvent('change', false, true)
    this.input.dispatchEvent(event)

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
          onHover={this.handleHover.bind(this, x)}
          fillPercentage={fillPercentage}
          isHighlighted={this.state.hoverIndex === 0 || this.state.hoverIndex >= x}
        />
      )
    }
    return (
      <ul
        class="shaf-rate"
        onMouseOut={this.handleHover.bind(this, 0)}
        aria-hidden
      >
        {stars}
      </ul>
    )
  }
}

Rate.displayName = 'Rate'
