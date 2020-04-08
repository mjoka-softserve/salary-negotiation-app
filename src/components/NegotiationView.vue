<template>
  <div class="negotiation-app">
    <div class="negotiation-app__container">
      <h1>{{ msg }}</h1>
      <section class="negotiation-content">
        <Tabs :tabs="tabsNames">
          <div class="negotiation-content" :slot="formatSlotName(tabsNames[0])">
            <Form v-model="employeeSalary" v-if="!employeeSalary"/>
            <div class="summary-view" v-else>
              <h3> {{ thankYouMessage }}</h3>
            </div>
          </div>
           <div class="negotiation-content" :slot="formatSlotName(tabsNames[1])">
            <Form v-model="employerSalary" v-if="!employerSalary"/>
            <div class="summary-view" v-else>
               <h3> {{ thankYouMessage }}</h3>
            </div>
          </div>
        </Tabs>
        <Dialog v-show="areBothSalariesSet" :message="dialogMessage" :maxOffer="employerSalary"
        :minOffer="employeeSalary" @click="startNegotiation"/>
      </section>
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs'
import Form from './Form'
import Dialog from './Dialog'
import SlotNameFormatter from './mixins/SlotNameFormatter'
import { store } from '@/components/store'

export default {
  name: 'NegotiationView',

  props: {
    msg: String
  },

  components: {
    Form,
    Tabs,
    Dialog
  },

  mixins: [ SlotNameFormatter ],

  data () {
    return {
      thankYouMessage: store.thankYouMessage,
      tabsNames: store.tabsNames,
      employeeSalary: 0,
      employerSalary: 0,
      successMessage: store.successLabel,
      failureMessage: store.failureLabel
    }
  },

  computed: {

    areBothSalariesSet () {
      const { employerSalary, employeeSalary } = this
      return employerSalary && employeeSalary ? true : false
    },

    areExpectedSalariesAcceptable () {
      const { employerSalary, employeeSalary, areBothSalariesSet } = this
      return areBothSalariesSet && (employerSalary >= employeeSalary) ? true : false
    },

    dialogMessage () {
      const { areExpectedSalariesAcceptable, successMessage, failureMessage } = this
      return areExpectedSalariesAcceptable ? successMessage : failureMessage
    }
  },

  methods: {

    startNegotiation() {
      this.employeeSalary = 0
      this.employerSalary = 0
    }

  }

}
</script>

<style lang="scss" scoped>

  .negotiation-content {
    margin-top: 40px;
  }

  .negotiation-app {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__container {
      max-width: 700px;
    }
  }

</style>