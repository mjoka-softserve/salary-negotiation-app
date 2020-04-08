import { shallowMount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'
import axios from 'axios'
import { store } from '@/components/store'

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { main: { temp: 19 } } }))
}))

describe('Dialog.vue', () => {

    let wrapper;
    const message = 'try again'
    const maxOffer = 1000
    const minOffer = 1
    const temperature = 19

    beforeEach(() => {
        wrapper = shallowMount(Dialog, {
            propsData: { message, maxOffer, minOffer, temperature },
        })
      
    })
    
  it('renders props.message when passed', () => {
    expect(wrapper.text()).toMatch(message)
  })

  it('renders props.maxOffer when passed', () => {
    expect(wrapper.props().maxOffer).toEqual(maxOffer)
  })

  it('renders props.maxOffer when passed', () => {
    expect(wrapper.props().minOffer).toEqual(minOffer)
  })

  it('emit click event', async () => {
    wrapper.vm.$emit('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('get London temperature', async () => {

    const result = await wrapper.vm.getLondonWeatherDetails();
    
    expect(result).toEqual({ data: { main: { temp: 19 } } } );
    expect(wrapper.vm.temperature).toEqual(temperature);
    
    expect(axios.get).toBeCalledWith(store.weatherUrl)
  })


})
