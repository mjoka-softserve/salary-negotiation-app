<template>
  <div class="negotiation-app">
    <div class="negotiation-app__container">
      <h1>{{ msg }}</h1>
      <div > Employee:  {{ employeeSalary }}, Employer: {{ employerSalary }} </div>
      <section class="negotiation-content">
        <Tabs :tabs="tabsNames">
          <div class="negotiation-content" :slot="formatSlotName(tabsNames[0])">
            <Form v-model="employeeSalary" v-if="!employeeSalary"/>
            <div class="summary-view" v-else>
              <h3>Thank you for sending</h3>
            </div>
          </div>
           <div class="negotiation-content" :slot="formatSlotName(tabsNames[1])">
            <Form v-model="employerSalary" v-if="!employerSalary"/>
            <div class="summary-view" v-else>
              <h3>Thank you for sending</h3>
            </div>
          </div>
        </Tabs>

        <Dialog v-show="areBothSalariesSet" :message="dialogMessage" @click="startNegotiation"/>
      </section>
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs'
import Form from './Form'
import Dialog from './Dialog'
import SlotNameFormatter from './mixins/SlotNameFormatter'

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
      tabsNames: ['I am employee', 'I am employer'],
      employeeSalary: null,
      employerSalary: null,
      successMessage: 'Congrats! You have success in negotiation',
      failureMessage: 'You have failure in negotation'
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
    updateExpectedSalary(value) {
      this.employeeSalary = value 
    },

    startNegotiation() {
      this.employeeSalary = null
      this.employerSalary = null
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