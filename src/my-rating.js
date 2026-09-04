import { LitElement, html } from "lit";
import "./pages/RatingPage.js";
import "./pages/congratsPage/CongratsPage.js";
import { es } from "./locales/locale_es.js";

export class MyRating extends LitElement {
  static properties = {
    _step: { type: Number },
    _selectedRating: { type: Number },
  };

  constructor() {
    super();
    this._step = 0;
    this._selectedRating = 0;
  }

  _renderStep(page) {
    const steps = {
      0: () => this._renderRatingPage(),
      1: () => this._renderCongratsPage(),
    };
    return steps[page]?.() ?? html``;
  }
//page 1
  _renderRatingPage() {
    return html`
      <rating-page
        .titleName=${es.title}
        .description=${es.subtitle}
        .submited=${es.submitter}
        @Rating-page-submitted=${this._handleRatingSubmitted}
      ></rating-page>
    `;
  }
//page 2
  _renderCongratsPage() {
    return html`
      <congrats-page
        .regretsTitle=${es.regretsTitle}
        .regretsDescription=${es.regretsSubtitle}
        .info=${es.rating}
        .selectedRating=${this._selectedRating}
      ></congrats-page>
    `;
  }

  _handleRatingSubmitted(event) {
    this._selectedRating = event.detail;
    this._step = 1;
  }

  _renderContent() {
    return html`
      <main>
      ${this._renderStep(this._step)}
      
      </main>`;
  }

  render() {
    return html`${this._renderContent()}`;
  }
}

window.customElements.define("my-rating", MyRating);
