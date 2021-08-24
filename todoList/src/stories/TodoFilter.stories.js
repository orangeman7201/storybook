import TodoFilter from '../components/TodoFilter';

export default {
  title: 'TodoFilter',
  component: TodoFilter,
};

const Template = (args) => ({
  components: { TodoFilter },
  setup() {
    return {args}
  },
  template: '<TodoFilter v-bind="args" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
