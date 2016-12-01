/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'
import Star from './star'

export default class Rate extends Component {
  constructor (props) {
    super(props)
    this.input = props.input
    this.state = {
      value: this.input.value,
      hoverIndex: 0,
      hasFocus: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.input.addEventListener('focus', this.handleFocus)
    this.input.addEventListener('blur', this.handleBlur)
    this.input.addEventListener('input', this.handleInput)
    this.input.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    this.input.removeEventListener('focus', this.handleFocus)
    this.input.removeEventListener('blur', this.handleBlur)
    this.input.removeEventListener('input', this.handleInput)
    this.input.addEventListener('keydown', this.handleKeyDown)
  }

  decrement () {
    const step = parseFloat(this.input.step) || 1
    let value = parseFloat(this.input.value) - step
    if (
      typeof this.input.min !== 'undefined' &&
      value < parseFloat(this.input.min)
    ) {
      value = parseFloat(this.input.min)
    }
    this.input.value = value

    this.setState({ value })
  }

  increment () {
    const step = parseFloat(this.input.step) || 1
    let value = parseFloat(this.input.value) + step
    if (
      typeof this.input.min !== 'undefined' &&
      value > parseFloat(this.input.max)
    ) {
      value = parseFloat(this.input.max)
    }
    this.input.value = value

    this.setState({ value: value })
  }

  handleKeyDown (event) {
    if (event.key === 'ArrowLeft') {
      this.decrement()
    } else if (event.key === 'ArrowRight') {
      this.increment()
    }
  }

  handleClick () {
    if (event.target !== this.input) {
      event.preventDefault()
      this.input.focus()
      return
    }
  }

  handleHover (hoverIndex) {
    this.setState({hoverIndex})
  }

  handleFocus (hoverIndex) {
    this.setState({hasFocus: true})
  }

  handleBlur (hoverIndex) {
    this.setState({hasFocus: false})
  }

  handleInput () {
    this.handleChange(this.input.value)
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
          isSelected={this.state.hasFocus && Math.floor(this.state.value) === x}
          fillPercentage={fillPercentage}
          isHighlighted={this.state.hoverIndex === 0 || this.state.hoverIndex >= x}
        />
      )
    }
    return (
      <ul
        class="shaf-star-rating"
        onMouseOut={this.handleHover.bind(this, 0)}
        onClick={this.handleClick}
        aria-hidden
      >
        {stars}
      </ul>
    )
  }
}

Rate.displayName = 'Rate'
