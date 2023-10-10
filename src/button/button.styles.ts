import {css} from 'lit';

export const buttonStyles = css`
  :host {
    display: inline-flex;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #d2ecff;
    cursor: pointer;
  }

  :host(:active) {
    background: #0f77ac;
    color: #ffffff;
  }
`;
