import React from 'react';

import { Buttonn } from '../components/Buttonn';

export default {
  title: 'Example/Button',
  component: Buttonn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Buttonn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
