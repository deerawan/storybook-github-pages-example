import { Button } from './button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    label: 'button',
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Button(args);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};

