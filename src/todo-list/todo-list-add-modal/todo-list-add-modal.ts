import {html, LitElement} from 'lit';
import {TemplateResult} from 'lit-html/development/lit-html';
import {todoListAddModalStyles} from './todo-list-add-modal.styles';
import {customElement, query} from 'lit/decorators.js';

@customElement('todo-list-add-modal')
export class TodoListAddModalElement extends LitElement {
  static override styles = [todoListAddModalStyles];

  @query('[form="name"]') public inputElement!: HTMLInputElement;

  public override render(): TemplateResult {
    return html`${this.modalBody}`;
  }

  private get modalBody(): TemplateResult {
    return html`<div class="modal__body">
      <div>Title</div>
      <div>
        <my-input form="name" />
      </div>
      <my-button buttonLabel="Close" @click="${this.close}"></my-button>
      <my-button buttonLabel="Add Item" @click="${this.addItem}"></my-button>
    </div>`;
  }

  private addItem(): void {
    this.dispatchEvent(
      new CustomEvent('add-item', {
        detail: {
          title: this.inputElement.value,
        },
        bubbles: true,
      })
    );
  }

  private close(): void {
    this.dispatchEvent(
      new CustomEvent('close-modal', {
        bubbles: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list-add-modal': TodoListAddModalElement;
  }
}
