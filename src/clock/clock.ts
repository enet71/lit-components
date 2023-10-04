import {html, LitElement} from 'lit';
import {TemplateResult} from 'lit-html/development/lit-html';
import {customElement, state} from 'lit/decorators.js';

@customElement('my-clock')
export class Clock extends LitElement {
  @state() public time = this.displayTime;

  constructor() {
    super();

    this.addClockInterval();
  }

  public override render(): TemplateResult {
    return html`${this.time}`;
  }

  private get displayTime(): string {
    return new Date().toLocaleTimeString();
  }

  private addClockInterval(): void {
    setInterval(() => {
      this.time = this.displayTime;
    }, 1000);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-clock': Clock;
  }
}
