import Vue from 'vue'
import router from '@/router'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('renders the title of the app', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.contain('Cooks & Cookies')
  })

  it('starts with the active page set to home', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor({router}).$mount()
    expect(vm.activePage).to.equal('home')
  })

  it('starts with the active class applied to the Home nav', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.active').textContent)
      .to.contain('Home')
  })

  it('changes the active page when the route changes', (done) => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor({router}).$mount()
    vm.$router.push('about')
    Vue.nextTick(() => {
      expect(vm.activePage).to.equal('about')
      done()
    })
  })
})
