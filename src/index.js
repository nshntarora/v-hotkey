import { bindEvent, unbindEvent } from './main'

const buildDirective = function (alias = {}) {
  return {
    mounted (el, binding) {
      bindEvent(el, binding, alias)
    },
    updated (el, binding) {
      if (binding.value !== binding.oldValue) {
        unbindEvent(el)
        bindEvent(el, binding, alias)
      }
    },
    unmounted: unbindEvent
  }
}

const plugin = {
  install (app, alias = {}) {
    app.directive('hotkey', buildDirective(alias))
  }
}

export default plugin
