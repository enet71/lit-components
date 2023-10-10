import {customElement, property} from 'lit/decorators.js';
import {html, LitElement} from 'lit';
import {TemplateResult} from 'lit-html';
import {buttonStyles} from './button.styles';

@customElement('my-button')
export class Button extends LitElement {
  static override styles = [buttonStyles];

  @property()
  public buttonLabel = '';

  protected override render(): TemplateResult {
    return html` <div>${this.buttonLabel}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': Button;
  }
}
