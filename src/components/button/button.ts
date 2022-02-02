import { html } from 'lit-html';

export const Button = ({ label, onClick }) => {

  return html`
    <button
      type="button"
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
