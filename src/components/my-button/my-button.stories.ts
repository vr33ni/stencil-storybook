export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/MyButton',
    args: {
      label: "Click me",
      variant: "solid",
      color: "primary",
      size: "m",
      disabled: false,
     },
    argsSlot: {
      label: "Slot",
    },
    argTypes: {
      variant: {
        options: ['solid', 'outline'],
        control: { type: 'radio' },
      },
      color: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
      size: {
        options: ['s', 'm'],
        control: { type: 'radio' },
      },
    },
};
const DefaultTemplate = (args) => `<my-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" first="${args.first}" middle="${args.middle}" last="${args.last}">
</my-button>`;
// const OtherTemplate = (args) => `<my-button label="${args.label}" variant="${args.variant}" color="${args.color}" size="${args.size}" disabled="${args.disabled}" first="${args.first}" middle="${args.middle}" last="${args.last}">
// </my-button>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: "Default button",
  variant: "solid",
  color: "primary",
  disabled: false,
  size: 'm',
};

export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
  label: "Secondary button",
  variant: "solid",
  color: "secondary",
  disabled: false,
  size: 'm',
};

export const Disabled = DefaultTemplate.bind({});
Disabled.args = {
  label: "Disabled button",
  variant: "solid",
  color: "primary",
  disabled: true,
  size: 'm',
};

export const Small = DefaultTemplate.bind({});
Small.args = {
  label: "Small button",
  variant: "solid",
  color: "primary",
  disabled: false,
  size: 's',
};

