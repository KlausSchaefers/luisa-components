<template>
  <button @click="toggle" type="button" :class="css">
    {{ lbl }}
  </button>
</template>

<style lang="scss">
  @import url('../assets/luisa-toggle-button.scss');

</style>

<script>
export default {
  emits: ['update:modelValue', 'click', 'change'],
  props: {
    label: {
        type: String,
        required: false,
        default: ""
    },
    selectedLabel: {
        type: String,
        required: false,
        default: ""
    },
    baseClass: {
        type: String,
        required: false,
        default: "text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    },
    unSelectedClass: {
        type: String,
        required: false,
        default: "bg-gray-400 hover:bg-gray-500",
    },
    selectedClass: {
        type: String,
        required: false,
        default: "bg-blue-700 hover:bg-blue-800"
    },
    modelValue: {
        type: Boolean,
        required: false,
    }
  },
  data() {
    return {
      selected: false
    }
  },
  computed: {
    css () {
      if (this.selected) {
        return this.baseClass + " " + this.selectedClass + " luisa-toggle-button luisa-toggle-button-selected"
      } else {
        return this.baseClass + " " + this.unSelectedClass + " luisa-toggle-button"
      }
    },
    lbl () {
      if (this.selected && this.selectedLabel) {
        return this.selectedLabel
      }
      return this.label
    }
  },
  methods: {
    toggle(e) {
      this.selected = !this.selected
      this.$emit('update:modelValue', this.selected)
      this.$emit('change', this.selected)
      this.$emit('click', e)
    }
  },
  watch: {
    modelValue (n) {
      this.selected = n
    }
  },
  mounted() {
    this.selected = this.modelValue
  }
}
</script>
