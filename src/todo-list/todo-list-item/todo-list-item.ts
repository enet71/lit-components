import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TemplateResult} from 'lit-html/development/lit-html';
import {todoListItemStyles} from './todo-list-item.styles';

@customElement('todo-list-item')
export class TodoListItemElement extends LitElement {
  static override styles = [todoListItemStyles];

  @property() public itemId = '';
  @property() public itemTitle = '';

  public override render(): TemplateResult {
    return html`
      <div class="list-item__title">${this.itemTitle}</div>
      <div>
        <button @click="${this.delete}">Delete</button>
      </div>
    `;
  }

  private delete(): void {
    this.dispatchEvent(
      new CustomEvent('delete-item', {
        detail: {
          id: this.itemId,
        },
        bubbles: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list-item': TodoListItemElement;
  }
}
