/** @jsx preact.h */

import preact, { Component } from 'preact'
import classNames from 'classnames'

export default class Rate extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const star = (
      <li class="shaf-rate-star">
        <svg
          viewBox="0 0 24 24"
          style={{width: '24px'}}
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill="#F3A536"
            stroke="#F3A536"
          ></path>
        </svg>
      </li>
    )
    return (
      <ul class="shaf-rate" aria-hidden>
        {star}
        {star}
        {star}
        {star}
        {star}
      </ul>
    )
  }
}

Rate.displayName = 'Rate'
