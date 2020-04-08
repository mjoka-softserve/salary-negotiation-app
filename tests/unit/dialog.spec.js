import { shallowMount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'

describe('Dialog.vue', () => {

    let wrapper;
    const message = 'try again'
    const maxOffer = 1000
    const minOffer = 1

    beforeEach(() => {
        wrapper = shallowMount(Dialog, {
            propsData: { message, maxOffer, minOffer }
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
})
