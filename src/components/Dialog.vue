<template>
  <div class="dialog">
    <div class="dialog__content">
      <h4 class="title">{{ message }}</h4>
      <p class="no-margin">{{ staticLabels.maxOffer }} {{ maxOffer }} $</p>
      <p>{{ staticLabels.minOffer }} {{ minOffer }} $</p>
      <button type="button" class="btn btn-info" @click="$emit('click')">
        {{ staticLabels.buttonText }}
      </button>
      <div class="temperature" v-if="temperature">
        <h5>{{ staticLabels.currentTemperature }}</h5>
        <div class="temperature__value">
          <b>{{ temperature }} &#8451;</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "@/components/store";

export default {
  name: "Dialog",

  props: {
    message: {
      type: String,
      required: true
    },
    maxOffer: {
      type: Number,
      required: true
    },
    minOffer: {
      type: Number,
      required: true
    },
    shouldUpdateWeather: {
      type: Boolean,
      required: true
    }

  },

  watch: {
    shouldUpdateWeather(value) {
      if(value) {
         this.getLondonWeatherDetails();
      }
    }
  },

  data() {
    return {
      temperature: null,
      staticLabels: store.dialogLabels
    };
  },

  methods: {
    getLondonWeatherDetails() {
      const getPromise = axios.get(store.weatherUrl);

      getPromise.then(res => {
        this.temperature = Math.floor(res.data.main.temp);
      });

      return getPromise;
    }
  },
  
};
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
  background: rgba(0, 0, 0, 0.4);
  @include align-center;

  &__content {
    min-height: 400px;
    width: 500px;
    background: #fff;
    border-radius: 4px;
    padding: 30px;
    @include align-center;

    .title,
    .btn {
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