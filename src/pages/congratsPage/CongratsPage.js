import { LitElement, html, css, unsafeCSS } from "lit";

import styles from "./CongratsPage.scss?inline";
import "../../components/type-text/type-text.js";
import "../../components/type-button/type-button.js";
import "../../components/type-icon/type-icon.js";
import illustration from "../../assets/images/illustration-thank-you.svg?url";

export class CongratsPage extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    regretsTitle: {
      type: String,
      attribute: "regrets-title",
    },

    regretsDescription: {
      type: String,
      attribute: "regrets-description",
    },

    icon: {
      type: String,
      attribute: "icon",
    },
    info: {
      type: String,
      attribute: "info",
    },
    selectedRating: {
      type: Number,
    },
  };

  constructor() {
    super();
    this.regretsTitle = "";
    this.regretsDescription = "";
    this.icon = "";
    this.info = "";
    this.selectedRating = 0;
  }

  _renderContent() {
    return html`
      <main class="card-content">
        <div class="card">
          <div class="icon-wrapper">
            <type-icon .src=${illustration}></type-icon>
          </div>

          <type-text
            tag="h1"
            weight="semibold"
            .text=${this.regretsTitle}
          ></type-text>

          <type-text .text=${this.regretsDescription}></type-text>

          <div class="selected-rating">
            <type-text
              .text=${`${this.info} ${this.selectedRating} out of 5`}
            ></type-text>
          </div>
        </div>
      </main>
    `;
  }
  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("congrats-page", CongratsPage);
