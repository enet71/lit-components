import {css} from 'lit';

export const todoListAddModalStyles = css`
  :host {
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }

  .modal__body {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
  }
`;
