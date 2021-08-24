import TodoDisplay from '../components/TodoDisplay';

export default {
  title: 'TodoDisplay',
  component: TodoDisplay,
};

const Template = (args) => ({
  components: { TodoDisplay },
  setup() {
    return {args}
  },
  template: '<TodoDisplay v-bind="args" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
