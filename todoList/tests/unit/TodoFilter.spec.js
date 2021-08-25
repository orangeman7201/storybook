import { shallowMount } from '@vue/test-utils';
import Component from '../../src/components/TodoFilter.vue'

describe('Testing Display', () => {
  it('ラジオボタンを押したとき$emitが実行されるか確認するテスト', () => {
    const wrapper = shallowMount(Component)
    wrapper.get('#working').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted('sendRadioState')[0][0]).toBe('working')
    })
  })
})