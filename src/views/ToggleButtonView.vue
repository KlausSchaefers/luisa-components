<template>
  <ToggleButton @change="onChange" v-model="active1" label="Button 1"></ToggleButton>

  <ToggleButton @click="onAction" v-model="active2" label="Button 2" selectedLabel="Selected"></ToggleButton>

  <ToggleButton @click="onAction" v-model="active2" label="Button 3" selectedLabel="Selected" selectedClass=" bg-green-700 hover:bg-green-800 "></ToggleButton>

  {{ active1 }}, {{ active2 }}
</template>

<script>
import ToggleButton from '../components/ToggleButton.vue'

export default {
  components: {
    ToggleButton
  },
  data() {
    return {
      active1: false,
      active2: true
    }
  },
  methods: {
    onChange (v) {
      console.debug('onChange', v)
    },
    onAction(e) {
      console.debug('onAction', e)
    }
  }
}
</script>
