import {css} from 'lit';

export const expansionPanelStyles = css`
  :host {
    display: block;
  }

  .header {
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #46a1ff;
    background: #d2e7fb;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

  .title {
    flex: 1;
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  .arrow_up {
    border-bottom: 5px solid black;
  }

  .arrow_down {
    border-top: 5px solid black;
  }

  .body {
    padding: 15px;
    border: 1px solid #aacfff;
    background: #ffffff;
    border-radius: 3px;
    margin-top: 10px;
  }
`;
