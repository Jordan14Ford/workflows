import React from 'react';
import Button from './Button'; // Import your component

// 👇 This sets up metadata for Storybook
export default {
  title: 'Components/Button', // Where it appears in the Storybook sidebar
  component: Button,          // The component being documented
};

// 👇 This template renders the Button component with passed-in args (props)
const Template = (args) => <Button {...args} />;

// 👇 Creates a "Primary" story instance of Button with specific props
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',           // Corresponds to the 'type' prop in Button.jsx
  label: 'Primary Button',   // Corresponds to the 'label' prop
};

// 👇 Creates a "Secondary" version of the Button
export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button',
};

// 👇 Creates a version with a custom click handler just to demonstrate interactivity
export const Clickable = Template.bind({});
Clickable.args = {
  type: 'primary',
  label: 'Click Me!',
  onClick: () => alert('Button clicked!'),
};
