/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'

export default class Star extends Component {
  constructor (props) {
    super(props)
    this.input = props.input
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleClick () { this.props.onChange() }

  handleHover () {
    this.props.onHover()
  }

  render () {
    let fill = this.props.fillPercentage > 0 ? '#F3A536' : 'transparent'

    return (
      <div class="shaf-rate-star">
        <svg
          viewBox="0 0 24 24"
          style={{width: '24px'}}
          onClick={this.handleClick}
          onMouseOver={this.handleHover}
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={fill}
            stroke="#F3A536"
            opacity={this.props.isHighlighted ? 1 : 0.5}
          ></path>
        </svg>
      </div>
    )
  }
}
