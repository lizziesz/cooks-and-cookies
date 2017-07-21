import Vue from 'vue'
import VueEventBus from 'vue-event-bus'
import Footer from '@/components/Footer'

describe('Footer.vue', () => {
  it('should render correct contents', () => {
    Vue.use(VueEventBus)
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .to.contain('Copyright 2016.')
  })

  it('starts with the attribution as an empty object', () => {
    Vue.use(VueEventBus)
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.attribution).to.deep.equal({})
  })

  it('updates the attribution when the search event happens', () => {
    Vue.use(VueEventBus)
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    vm.$bus.$emit('search', {
      attribution: {
        html: '<a></a>',
        url: 'imageurl',
        logo: 'apilogo'
      }
    })
    expect(vm.attribution.url).to.equal('imageurl')
  })
})
