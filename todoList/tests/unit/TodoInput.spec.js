import { shallowMount } from '@vue/test-utils';
import Component from '../../src/components/TodoInput.vue'

describe('submitボタンを押したとき入力されているデータを送信できるか確認するテスト', () => {
    it('todo.task', () => {
      const wrapper = shallowMount(Component)
      wrapper.setData({newTodo: '米を研ぐ'})
      wrapper.get('#input-form').trigger('submit')
      expect(wrapper.emitted('sendItem')[0][0].task).toBe('米を研ぐ')
    })
})