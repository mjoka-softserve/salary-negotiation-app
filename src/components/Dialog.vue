<template>
    <div class="dialog">
        <div class="dialog__content">
            <h4 class="title"> {{ message }} </h4>
            <button type="button" class="btn btn-info" @click="$emit('click')"> Try again </button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Dialog",
    props: {
        message: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>

@mixin align-center() {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.dialog {
    position: fixed;
    height: 100%;
    min-width: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0, 0.4);
    @include align-center;

    &__content {
        min-height: 400px;
        width: 500px;
        background: #fff;
        border-radius: 4px;
        padding: 30px;
        @include align-center;

        .title, .btn {
            margin-bottom: 30px;
        }
    }
}
</style>