import TodoInput from '../components/TodoInput';

export default {
  title: 'TodoInput',
  component: TodoInput,
};

const Template = (args) => ({
  components: { TodoInput },
  setup() {
    return {args}
  },
  template: '<TodoInput v-bind="args" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
