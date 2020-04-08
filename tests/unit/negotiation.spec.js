import { shallowMount } from '@vue/test-utils'
import NegotiationView from '@/components/NegotiationView.vue'

describe('NegotiationView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NegotiationView, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
