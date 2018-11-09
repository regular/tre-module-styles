const h = require('mutant/html-element')
const Value = require('mutant/value')
const strip = require('strip-indent')
const indent = require('indent-string')

module.exports = function(module_name) {
  const obs = Value('')
  return function setStyle(css) {
    if (!document.head.querySelector(`style[data-module="${module_name}"]`)) {
      document.head.appendChild(h('style', {
        attributes: {
          'data-module': module_name
        }
      }, obs))
    }
    obs.set(pretty(css))
  }
}

function pretty(css) {
  css = strip(css).replace(/\s+$/,'')
  return indent(css, 2) + '\n'
}
