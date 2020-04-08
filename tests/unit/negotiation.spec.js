import { shallowMount } from '@vue/test-utils'
import NegotiationView from '@/components/NegotiationView.vue'
import { store } from '@/components/store'

describe('NegotiationView.vue', () => {

  let wrapper;
  const msg = 'new message'

  beforeEach(() => {
    wrapper = shallowMount(NegotiationView, {
      propsData: { msg }
    })

  })

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg)
  })

  it('clears the values and start from scratch ', async () => {
    wrapper.setData({ employeeSalary: 100, employerSalary: 109 })

    wrapper.vm.startNegotiation()
    await wrapper.vm.$nextTick()
  
    expect(wrapper.vm.employeeSalary).toEqual(0)
    expect(wrapper.vm.employeeSalary).toEqual(0)

  })

  it('returns true if both values are filled', () => {
    wrapper.setData({ employeeSalary: 100, employerSalary: 109 })

    expect(wrapper.vm.areBothSalariesSet).toBe(true);
  });

  it('returns true if expectations were met', () => { 
    wrapper.setData({ employeeSalary: 100, employerSalary: 109 })

    expect(wrapper.vm.areExpectedSalariesAcceptable).toBe(true);
  });

  it('returns false if both values are filled', () => {
    wrapper.setData({ employeeSalary: 0, employerSalary: 0 })

    expect(wrapper.vm.areBothSalariesSet).toBe(false);
  });

  it('returns false if expectations were met', () => {   
    wrapper.setData({ employeeSalary: 150, employerSalary: 109 })

    expect(wrapper.vm.areExpectedSalariesAcceptable).toBe(false);
  });

  it('returns success message if expectations were met', () => {   
    wrapper.setData({ employeeSalary: 100, employerSalary: 109 })

    expect(wrapper.vm.dialogMessage).toBe(store.successLabel);
  });

  it('returns success message if expectations were met', () => {   
    wrapper.setData({ employeeSalary: 150, employerSalary: 109 })

    expect(wrapper.vm.dialogMessage).toBe(store.failureLabel);
  });

})
