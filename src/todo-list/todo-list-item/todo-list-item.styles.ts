import {css} from 'lit';

export const todoListItemStyles = css`
  :host {
    display: flex;
    border: 1px solid #d2ecff;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .list-item__title {
    flex: 1;
  }
`;
