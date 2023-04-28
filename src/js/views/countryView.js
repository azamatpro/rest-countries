import View from "./View.js";

class countryView extends View {
  _parentElement = document.querySelector(`.country-detail-inner`);
  _btnBack = document.querySelector(`.back-btn`);
  _countryDetail = document.querySelector(`.country-detail`);
  _container = document.querySelector(`.container`);
  _errorMessage = `No data found. Please, try again :)`;
  
  constructor() {
    super();
    this._btnBackHandler();
  }

  toggleWindow() {
    this._container.classList.toggle(`hidden`);
    this._countryDetail.classList.toggle(`hidden`);
  }

  _btnBackHandler() {
    this._btnBack.addEventListener(`click`, () =>{
      this.toggleWindow()
      window.history.back(); // To remove hash link
    });

  }
  addHandlerBorder(handler) {
    this._parentElement.addEventListener(`click`, (e) => {
      const borderCountry = e.target.closest(`.country-detail-border-btn`);
      if (!borderCountry) return;
      handler(borderCountry);
    });
  }
  _generateMarkup() {
    return `
    <div class="country-detail-imgbox">
      <img class="country-detail-imgbox__img" src="${
        this._data.flag
      }" alt="Country flag" />
    </div>
    <div class="country-detail-content">
      <h3 class="country__name cl-fonts" style="margin-bottom:2rem;">${
        this._data.name
      }</h3>
      <div class="country-detail__data">
        <div class="country-detail__data--row">
          <p class="country__row cl-fonts"><span>Native name:</span>${
            this._data.nativeName
          }</p>
          <p class="country__row cl-fonts"><span>Population:</span>${this._data.population.toLocaleString(
            "en-GB",
            { timeZone: `${this._data.timezones?.[0]}` }
          )}</p>
          <p class="country__row cl-fonts"><span>Region:</span>${
            this._data.region
          }</p>
          <p class="country__row cl-fonts"><span>Sub Region:</span>${
            this._data.subregion
          }</p>
          <p class="country__row cl-fonts"><span>Capital:</span>${
            this._data.capital
          }</p>
        </div>
        <div class="country-detail__data--row">
          <p class="country__row cl-fonts"><span>Top Level Domain:</span>${
            this._data.topLevelDomain
          }</p>
          <p class="country__row cl-fonts"><span>Currencies:</span>${
            this._data.currencies[0].name
          }</p>
          <p class="country__row cl-fonts"><span>Languages:</span>${this._data.languages?.map((l) => `${l.name}`).join(`, `)}</p>
        </div>
      </div>
      <div class="country-detail-borders">
        <p class="country__row cl-fonts"><span>Border Countries:</span></p>
        ${this.renderBorders()}
      </div>
    </div>
  `;
  }
  renderBorders(){
    return `<div class="border-inner-box ${this._data.borders ? `` : `no-borders`}">
    ${this._data.borders ? this._data.borders.map(
        (b) =>
          `<button class="btn country-detail-border-btn cl-fonts" data-name="${b}">${b}</button>`
      ).join(``) : `No border found :)`}
    </div>`
  }
}
export default new countryView();
