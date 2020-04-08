<template>
    <div class="dialog">
        <div class="dialog__content">
            <h4 class="title"> {{ message }} </h4>
            <p class="no-margin"> Maximum offer: {{ maxOffer }} $</p>
            <p> Minimum expected salary: {{ minOffer }} $</p>
            <button type="button" class="btn btn-info" @click="$emit('click')"> Try again </button>
            <div class="temperature" v-if="temperature">
                <h5> Current temperature in London </h5>
                <div class="temperature__value"> <b> {{ temperature }} &#8451; </b></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Dialog",
    props: {
        message: {
            type: String,
            required: true,
        },
        maxOffer: {
            type: Number,
            required: true,
        },
        minOffer: {
            type: Number,
            required: true,
        }

    },

    data () {
        return {
            temperature: null
        }
    },

    methods: {
        async getLondonWeatherDetails () {
            const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=07e1216e176ad7a6fef4392ceba56cf5&units=metric')
            this.temperature  = res.data.main.temp
        }
    },

    created () {
       this.getLondonWeatherDetails()
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

.no-margin {
    margin-bottom: 0;
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

.temperature {
    &__value {
        font-size: 22px;
        color: darkblue;
    }
}
</style>