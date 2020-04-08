import { shallowMount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Form)
  })

  it('updates data with value from input', () => {
    wrapper.find('input[type="number"]').setValue(100)  

    expect(wrapper.vm.expectedSalary).toBe(100)

  })

  it('emit correct value', async () => {
    wrapper.find('input[type="number"]').setValue(100)
    wrapper.vm.sendExpectedSalary()

    await wrapper.vm.$nextTick()
  
    expect(wrapper.emitted().input[0]).toEqual([100])

  })
})
