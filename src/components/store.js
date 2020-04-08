import Vue from 'vue'

export const store = Vue.observable({
    weatherUrl: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=07e1216e176ad7a6fef4392ceba56cf5&units=metric',
    dialogLabels: {
        maxOffer: 'Maximum offer:',
        minOffer: 'Minimum expected salary:',
        buttonText: 'Close and negotiate again',
        currentTemperature: 'Current temperature in London',
    },
    formLabels: {
        placeholder: 'put your expected salary here...',
        buttonText: 'Send your proposal'
    },
    thankYouMessage: 'Thank you for your proposal',
    successLabel: 'Congrats! You have success in negotiation',
    failureLabel: 'You have failure in negotation',
    tabsNames: ['I am employee', 'I am employer'],
  })
