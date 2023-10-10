import {html, LitElement} from 'lit';
import {TemplateResult} from 'lit-html/development/lit-html';
import {inputStyles} from './input.styles';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('my-input')
export class Input extends LitElement {
  static override styles = [inputStyles];

  @property() public value = '';

  @query('#input') public inputElement!: HTMLInputElement;

  protected override render(): TemplateResult {
    return html`<input
      id="input"
      value="${this.value}"
      @change="${this.onInputChange}"
    />`;
  }

  private onInputChange(): void {
    this.value = this.inputElement.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-input': Input;
  }
}
