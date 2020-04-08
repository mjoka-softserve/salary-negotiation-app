<template>
    <div class="negotiation-form">
        <div class="form-group">
            <input type="number" class="form-control" v-model.number="expectedSalary" required
            :placeholder="'put your expected salary here...'"/>
        </div>
        <button type="button" class="btn btn-primary" @click="sendExpectedSalary">Send your salary</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            expectedSalary: null,
        }
    },

    methods: {
        sendExpectedSalary() {
            this.$emit('input', this.expectedSalary)
        }
    }
}
</script>

<style lang="scss" scoped>
    .negotiation-form {
        display: flex;
        flex-direction: column;
        align-items: center;

        .form-control {
            min-width: 300px;
        }
    }
</style>