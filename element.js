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
    this.input.className += ' shaf-screenreader-only'
    this.updateRendering()
  },

  updateRendering() {
    const root = this._shadowRoot || this.container
    preact.render(<RateComponent input={this.input} />, root, root.querySelector(':not(style)'))
    this.rendered = true
  }
})
