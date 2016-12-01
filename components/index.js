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
      hoverIndex: this.input.value,
      hasFocus: false,
      inKeyboardMode: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.triggerChange = this.triggerChange.bind(this)
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
    this.input.removeEventListener('keydown', this.handleKeyDown)
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

    this.triggerChange()
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

    this.triggerChange()
    this.setState({ value: value })
  }

  handleKeyDown (event) {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      this.setState({inKeyboardMode: true})
    }
    if (event.keyCode === 37) { // 'ArrowLeft'
      this.decrement()
    } else if (event.keyCode === 39) { // 'ArrowRight'
      this.increment()
    }
  }

  handleClick (event) {
    if (event.target !== this.input) {
      event.preventDefault()
      this.input.focus()
      this.setState({inKeyboardMode: false})
      return
    }
  }

  handleHover (hoverIndex) {
    this.setState({
      hoverIndex,
      inKeyboardMode: false
    })
  }

  handleMouseLeave () { this.setState({ inKeyboardMode: true }) }

  handleFocus (hoverIndex) { this.setState({hasFocus: true}) }
  handleBlur (hoverIndex) { this.setState({hasFocus: false}) }
  handleInput () { this.handleChange(this.input.value) }

  handleChange (value) {
    this.input.value = value
    this.triggerChange()
    this.setState({value})
  }

  triggerChange () {
    const event = document.createEvent('HTMLEvents')
    event.initEvent('change', false, true)
    this.input.dispatchEvent(event)
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
          isHighlighted={this.state.hoverIndex >= x}
          inKeyboardMode={this.state.inKeyboardMode}
        />
      )
    }
    return (
      <div
        class="shaf-star-rating"
        onMouseOut={this.handleMouseLeave}
        onClick={this.handleClick}
        aria-hidden
      >
        {stars}
      </div>
    )
  }
}

Rate.displayName = 'Rate'
