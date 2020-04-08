import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'
Vue.use(BootstrapVue)

describe('Tabs.vue', () => {
  it('renders props.tabs when passed', () => {
    const tabs = ['tab1', 'tab0']
    const wrapper = shallowMount(Tabs, {
      propsData: { tabs }
    })

    expect(wrapper.props().tabs).toContain('tab0');
    expect(wrapper.props().tabs).toContain('tab1');
  })
})
