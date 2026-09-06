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

    ratingOption: {
      type: String,
      attribute: "rating-option",
    },
  };

  constructor() {
    super();
    this.regretsTitle = "";
    this.regretsDescription = "";
    this.icon = "";
    this.info = "";
    this.selectedRating = 0;
    this.ratingOption = "";
  }

  _renderContent() {
    //SE HA AGREGADO LA VARIABLE info_text PARA CONCATENAR EL TEXTO DE LA CALIFICACION SELECCIONADA Y EL TEXTO DE RATINGOPTION
    const info_text = `${this.info} ${this.selectedRating} ${this.ratingOption}`;

    return html`
      <main class="card-content">
        <div class="card">
          <div class="icon-wrapper">
            <type-icon .src=${illustration}></type-icon>
          </div>
          <div class="selected-rating">
            <type-text .text=${info_text}></type-text>
          </div>
          <div class ="regrets-title">
          <type-text
            tag="h1"
            weight="semibold"
            .text=${this.regretsTitle}
          ></type-text>
          </div>
          <div class="description">
            <type-text size="ml"
            .text=${this.regretsDescription}>
          </type-text>
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
