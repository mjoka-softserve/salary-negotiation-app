import { shallowMount } from '@vue/test-utils'
import Dialog from '@/components/Dialog.vue'

describe('Dialog.vue', () => {
    
  it('renders props.message when passed', () => {
    const message = 'truy again'
    const wrapper = shallowMount(Dialog, {
      propsData: { message }
    })

    expect(wrapper.text()).toMatch(message)
  })

  it('emit click event', async () => {
    const message = 'truy again'
    const wrapper = shallowMount(Dialog, {
        propsData: { message }
      })

    wrapper.vm.$emit('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
