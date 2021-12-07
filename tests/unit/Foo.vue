<template>
  <div>
    <div
      v-hotkey="keymap"
      class="hotkey"
    >
      Toggle
    </div>
    <div
      v-if="visible"
      class="visible"
    >
      Hello hotkey
    </div>
  </div>
</template>

<script>import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Foo',
  data: () => ({ visible: false }),
  computed: {
    keymap () {
      return { enter: this.show, esc: this.hide }
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
})
</script>
