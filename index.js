import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered'

import MyButton from './../components/MyButton.vue'

storiesOf('MyButton', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('with some Addons', () => {
    const label = text('Label', 'BUTTON')
    const color = color('Color', '#3c3c3c')
    return {
      components: { MyButton },
      template: `
        <div>
          <p>You can change the button label by touching widgets in a KNOBS tab.</p>
          <MyButton
            style="background-color: ${color}"
            @click="handleClick"
           >${label}</MyButton>
        </div>
      `,
      methods: {
        handleClick: linkTo('SomeComponent')
      },
    }
  })

storiesOf('SomeComponent', module)
  .add('hoge', () => ({
    template: `<div>HOGE</di>`
  }))