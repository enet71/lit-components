import {html, LitElement} from 'lit';
import {customElement, queryAssignedElements} from 'lit/decorators.js';
import {TemplateResult} from 'lit-html/development/lit-html';
import {ExpansionPanel} from '../expansion-panel/expansion-panel';
import {accordionStyles} from './accordion.styles';

@customElement('my-accordion')
export class Accordion extends LitElement {
  static override styles = [accordionStyles];

  @queryAssignedElements({selector: 'expansion-panel'})
  public expansionPanels!: ExpansionPanel[];

  constructor() {
    super();

    this.addPanelToggleListener();
  }

  public override render(): TemplateResult {
    return html`<slot></slot>`;
  }

  private addPanelToggleListener(): void {
    this.addEventListener('expansion-panel-toggle', (event: Event) => {
      this.expansionPanels.forEach((panel: ExpansionPanel) => {
        if (panel !== event.target) {
          panel.open = false;
        }
      });
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-accordion': Accordion;
  }
}
