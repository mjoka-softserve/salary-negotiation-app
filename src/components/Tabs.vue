<template>
  <div class="tabs">
    <BTabs contentClass="mt-3">
      <BTab v-for="(tab, i) in tabs" :key="tab+i" :title="tab">
        <slot :name="formatSlotName(tab)" />
      </BTab>
    </BTabs>
  </div>
</template>

<script>

import SlotNameFormatter from './mixins/SlotNameFormatter'

export default {
  name: 'Tabs',
  props: {
    tabs: {
        required: true,
        type: Array,
    },
  },
  
  mixins: [ SlotNameFormatter ],
}

</script>

<style scoped>
</style>
