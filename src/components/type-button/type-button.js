import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./type-button.scss?inline";

export class TypeButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;
  static properties = {
    text: {
      type: String,
      attribute: "text",
    },

    size: {
      type: String,
      attribute: "size",
    },

    variant: {
      type: String,
      attribute: "variant",
    },
    selected: {
      type: Boolean,
      reflect: true,
    },
    label: {
      type: Number,
    },
  };

  constructor() {
    super();
    this.text = "";
    this.size = "";
    this.variant = "primary";
    this.selected = false;
    this.label = 0;
  }
  
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("type-button-click", {
        bubbles: true,
        composed: true,
        detail: this.text || this.label,
      }),
    );
  }
  _renderContent() {
    const className = `
    ${this.size}
    ${this.variant}
    ${this.selected ? "selected" : ""}
  `;

    return html`
      <button
        class=${className}
        aria-pressed=${this.selected}
        @click=${this._handleClick}
      >
        ${this.text ? this.text : this.label}
      </button>
    `;
  }

  render() {
    return html` ${this._renderContent()} `;
  }
}

customElements.define("type-button", TypeButton);
