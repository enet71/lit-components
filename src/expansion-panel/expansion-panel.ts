import {html, LitElement, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TemplateResult} from 'lit-html/development/lit-html';
import {expansionPanelStyles} from './expansion-panel.styles';

@customElement('expansion-panel')
export class ExpansionPanel extends LitElement {
  static override styles = [expansionPanelStyles];

  @property({type: Boolean}) open = false;
  @property() disabled = false;


  public override render(): TemplateResult {
    return html`${this.header}${this.body}`;
  }

  private toggleOpen(): void {
    this.open = !this.open;

    this.dispatchToggleEvent();
  }

  private dispatchToggleEvent(): void {
    this.dispatchEvent(
      new CustomEvent('expansion-panel-toggle', {
        detail: {open: this.open},
        bubbles: true,
      })
    );
  }

  private get header(): TemplateResult {
    return html`
      <div @click=${this.toggleOpen} class="header">
        <div class="title">
          <slot name="header"></slot>
        </div>
        ${this.arrow}
      </div>
    `;
  }

  private get arrow(): TemplateResult {
    return html`
      <div class="arrow ${this.open ? 'arrow_up' : 'arrow_down'}"></div>
    `;
  }

  private get body(): TemplateResult {
    if (!this.open) {
      return html`${nothing}`;
    }

    return html`
      <div class="body">
        <slot name="body"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expansion-panel': ExpansionPanel;
  }
}
