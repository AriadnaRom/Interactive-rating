import { LitElement, html, css, unsafeCSS } from "lit";

import styles from "./RatingPage.scss?inline";
import "../components/type-text/type-text.js";
import "../components/type-button/type-button.js";
import "../components/type-icon/type-icon.js";
import { RATINGS } from "../constants/rating.js";
import starIcon from "../assets/images/icon-star.svg?url";

export class RatingPage extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    titleName: {
      type: String,
      attribute: "title-name",
    },

    description: {
      type: String,
      attribute: "description",
    },

    icon: {
      type: String,
      attribute: "icon",
    },
    submited: {
      type: String,
      attribute: "submited",
    },
    selectedRating: {
      type: Number,
    },
  };

  constructor() {
    super();
    this.titleName = "";
    this.description = "";
    this.icon = "";
    this.submited = "";
    this.selectedRating = 0;
  }

  _selectRating(event) {
    this.selectedRating = Number(event.detail);
  }

  _submitRating() {
    if (this.selectedRating === 0) return;

    this.dispatchEvent(
      new CustomEvent("Rating-page-submitted", {
        bubbles: true,
        composed: true,
        detail: this.selectedRating,
      }),
    );
  }

  _renderContent() {
    return html`
      <main class="card-content">
        <div class="card">
          <div class="icon-wrapper">
            <type-icon .src=${starIcon}></type-icon>
          </div>

          <type-text
            tag="h1"
            weight="semibold"
            .text=${this.titleName}
          ></type-text>

          <type-text .text=${this.description}></type-text>

          <div class="ratings">
            ${RATINGS.map(
              (rating) => html`
                <type-button
                  .label=${rating}
                  variant="secondary"
                  .selected=${this.selectedRating === rating}
                  @type-button-click=${this._selectRating}
                ></type-button>
              `,
            )}
          </div>

          <type-button
            @type-button-click=${this._submitRating}
            .text=${this.submited}
            variant="primary"
          >
          </type-button>
        </div>
      </main>
    `;
  }
  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("rating-page", RatingPage);
