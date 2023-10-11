import './todo-list-add-modal/todo-list-add-modal';
import './todo-list-item/todo-list-item';

import {html, LitElement, nothing} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {TemplateResult} from 'lit-html/development/lit-html';
import {TodoListItem} from './todo-list.interfaces';
import {todoListStyles} from './todo-list.styles';
import {TodoListController} from './todo-list.controller';
import {repeat} from 'lit/directives/repeat.js';

@customElement('todo-list')
export class TodoListElement extends LitElement {
  public static override styles = [todoListStyles];

  @state() public showAddModal = false;

  private todoListController: TodoListController = new TodoListController(this);

  public override render(): TemplateResult {
    return html`
      ${this.itemsTemplate}
      <my-button buttonLabel="Add Item" @click="${this.addItem}"></my-button>

      ${this.addItemModalTemplate}
    `;
  }

  private get itemsTemplate(): TemplateResult {
    return html`${this.todoListController.todoItemsRender({
      complete: (items: TodoListItem[]) =>
        html`${repeat(
          items,
          ({id}) => id,
          (item: TodoListItem) =>
            html`
              <div @delete-item="${this.deleteItem}">
                <todo-list-item
                  .itemId="${item.id}"
                  .itemTitle="${item.title}"
                ></todo-list-item>
              </div>
            `
        )}`,
    })}`;
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
    this.todoListController
      .createItem({
        title: event.detail.title,
      })
      .then(() => {
        this.closeAddModal();
      });
  }

  private deleteItem(event: CustomEvent): void {
    this.todoListController.deleteItem(event.detail.id);
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
