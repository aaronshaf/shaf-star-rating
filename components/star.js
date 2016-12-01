/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'

export default class Star extends Component {
  constructor (props) {
    super(props)
    this.input = props.input
    this.state.isActive = false
    this.state.isSelected = false

    // ugh
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.uniqId = Math.random()
  }

  handleClick () { this.props.onChange() }
  handleHover () { this.props.onHover() }
  handleMouseDown () { this.setState({isActive: true}) }
  handleTouchStart () {
    this.props.onHover()
    this.setState({isActive: true})
  }
  handleTouchEnd () {
    this.props.onChange()
    this.setState({isActive: false})
  }
  handleMouseUp () { this.setState({isActive: false}) }
  handleMouseLeave () { this.setState({isActive: false}) }

  render () {
    let fill
    if (this.props.fillPercentage > 0) {
      fill = '#F3A536'
    } else {
      fill = 'white'
    }

    let stroke
    if (this.props.isSelected || this.state.isActive) {
      stroke = '#0099E0'
    } else {
      stroke = '#F3A536'
    }

    let strokeWidth
    if (this.state.isActive) {
      strokeWidth = 2
    } else {
      strokeWidth = 1
    }

    return (
      <div
        class='shaf-star-rating-star'
        onClick={this.handleClick}
        onMouseOver={this.handleHover}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <svg
          viewBox='0 0 24 24'
          style={{width: '24px', height: '24px'}}
        >
          <filter id={`blurfilter-${this.uniqId}`} width='24' height='24'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='2' />
          </filter>
          <path
            d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
            fill='transparent'
            stroke='#0099E0'
            stroke-width='1'
            opacity={this.props.isSelected || this.state.isActive ? 1 : 0}
            style={{filter: `url(#blurfilter-${this.uniqId})`}}
          ></path>
          <path
            d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
            fill={fill}
            stroke={stroke}
            stroke-width={strokeWidth}
            opacity={this.props.isHighlighted ? 1 : 0.4}
          ></path>
        </svg>
      </div>
    )
  }
}
