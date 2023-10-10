import './todo-list-add-modal/todo-list-add-modal';
import './todo-list-item/todo-list-item';

import {html, LitElement, nothing} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {TemplateResult} from 'lit-html/development/lit-html';
import {TodoListItem} from './todo-list.interfaces';
import {todoListStyles} from './todo-list.styles';

@customElement('todo-list')
export class TodoListElement extends LitElement {
  public static override styles = [todoListStyles];

  @state() public items: TodoListItem[] = [];
  @state() public showAddModal = false;

  public override render(): TemplateResult {
    return html`
      ${this.itemsTemplate}
      <my-button buttonLabel="Add Item" @click="${this.addItem}"></my-button>

      ${this.addItemModalTemplate}
    `;
  }

  private get itemsTemplate(): TemplateResult {
    return html`${this.items.map(
      (item: TodoListItem) =>
        html`
          <div @delete-item="${this.deleteItem}">
            <todo-list-item
              .itemId="${item.id}"
              .itemTitle="${item.title}"
            ></todo-list-item>
          </div>
        `
    )}`;
  }

  private get addItemModalTemplate(): TemplateResult {
    if (!this.showAddModal) {
      return html`${nothing}`;
    }

    return html`<todo-list-add-modal
      @add-item="${this.createItem}"
      @close-modal="${this.closeAddModal}"
    ></todo-list-add-modal>`;
  }

  private addItem(): void {
    this.showAddModal = true;
  }

  private createItem(event: CustomEvent): void {
    this.items = [
      ...this.items,
      {
        id: `${Date.now()}`,
        title: event.detail.title,
      },
    ];
    this.closeAddModal();
  }

  private deleteItem(event: CustomEvent): void {
    this.items = this.items.filter(({id}) => id !== event.detail.id);
  }

  private closeAddModal(): void {
    this.showAddModal = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list': TodoListElement;
  }
}
