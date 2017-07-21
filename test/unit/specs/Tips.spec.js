import Vue from 'vue'
import Tips from '@/components/Tips'

describe('Tips.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Tips)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .to.contain('Tip #1 (Measuring Flour):')
  })
})
