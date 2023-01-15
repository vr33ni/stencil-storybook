import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Prop() label: string;
  @Prop() variant: 'solid' | 'outline';
  @Prop() color: 'primary' | 'secondary';
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() href: string;


  render(): HTMLElement {
    return  <Host>
      <button class={classNames(
      'button',
      this.size === "s" && `button--size-${this.size}`,
      this.variant === "outline" ? `button--variant-outline-${this.color}` : `button--variant-${this.color}`,
      this.disabled && `button--disabled`
    )}>{this.label}
     <slot>{this.label}</slot></button>
    </Host>;
  }
}
