<template>
  <div class="negotiation-form">
    <div class="form-group">
      <input
        type="number"
        class="form-control"
        v-model.number="expectedSalary"
        required
        :placeholder="staticLabels.placeholder"
        @keyup.enter="sendExpectedSalary"
      />
      <b class="currency">$</b>
    </div>
    <button
      type="button"
      :disabled="!expectedSalary"
      class="btn btn-primary"
      @click="sendExpectedSalary"
    >{{ staticLabels.buttonText }}</button>
  </div>
</template>

<script>
import { store } from "@/components/store";

export default {
    
  data() {
    return {
      expectedSalary: null,
      staticLabels: store.formLabels
    };
  },

  methods: {
    sendExpectedSalary() {
      this.$emit("input", this.expectedSalary);
    }
  }
};
</script>

<style lang="scss" scoped>

.negotiation-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-control {
    min-width: 300px;
  }

  .form-group {
    display: flex;
    align-items: center;
  }

  .currency {
    margin-left: 15px;
  }
}

</style>