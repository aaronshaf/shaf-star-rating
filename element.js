/** @jsx preact.h */
import preact from 'preact'
import RateComponent from './components'
import createElementClass from 'create-element-class'
import css from './styles'

export default createElementClass({
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.rendered) { this.updateRendering() }
  },

  connectedCallback() {
    this.container = document.createElement('div')

    if (document.body.attachShadow) {
      this._shadowRoot = this.container.attachShadow({mode: 'open'})
      const style = document.createElement('style')
      style.type = 'text/css'
      style.appendChild(document.createTextNode(css))
      this._shadowRoot.appendChild(style)
    }

    this.appendChild(this.container)

    this.input = this.querySelector('input')
    Object.assign(this.input.style, {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'fixed',
      width: '1px'
    })

    if (MutationObserver) {
      this.observer = new MutationObserver((mutations) => {
        this.updateRendering()
      })
      const observerConfig = { attributes: true, childList: true, characterData: true, subtree: true }
      this.observer.observe(this.input, observerConfig)
    }

    this.updateRendering()
  },

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },

  updateRendering() {
    const root = this._shadowRoot || this.container
    preact.render(
      <RateComponent input={this.input} />,
      root,
      root.querySelector(':not(style)')
    )
    this.rendered = true
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.attachShadow) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
    document.head.insertBefore(style, document.head.firstChild)
  }

  const tagStyle = document.createElement('style')
  tagStyle.type = 'text/css'
  tagStyle.appendChild(document.createTextNode(
`shaf-rate {
  display: inline-block;
  vertical-align: middle;
  line-height: 1rem;
}`))
  document.head.insertBefore(tagStyle, document.head.firstChild)
})
