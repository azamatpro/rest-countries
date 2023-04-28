import View from "./View.js";

class AllCountries extends View {
  _parentElement = document.querySelector(`.countries`);
  _darkMode = document.querySelector(`.header__moon`);
  _selectRegion = document.querySelector(`.navigation__select`);
  _searchInput = document.querySelector(`.search-input`);
  _errorMessage = `No data found. Please, try again :)`;

  constructor() {
    super();
    this._darkModeHandler();
  }
  toggleMode() {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
  }
  _darkModeHandler() {
    this._darkMode.addEventListener(`click`, (e) => {
      if (!e.target) return;
      this.toggleMode();
    });
  }
  addHandlerRender(handler) {
    window.location.hash = ``;
    handler();
  }
  addHandlerTarget(handler) {
    window.addEventListener(`hashchange`, handler);
  }
  addHandlerRegion(handler) {
    this._selectRegion.addEventListener(`change`, function (e) {
      const region = e.target.value;
      if (!region) return;
      handler(region);
    });
  }

  _generateMarkup() {
    return this._data.map((item) => this._generateMarkupPreview(item)).join(``);
  }
  _generateMarkupPreview(data) {
    return `
      <a class="country" href="#${data.name}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name cl-fonts">${data.name}</h3>
          <p class="country__row cl-fonts"><span>Population:</span>${data.population.toLocaleString(
            "en-GB",
            { timeZone: `${data.timezones?.[0]}` }
          )}</p>
          <p class="country__row cl-fonts"><span>Region:</span>${
            data.region
          }</p>
          <p class="country__row cl-fonts"><span>Capital:</span>${
            data.capital ? data.capital : `No capital found!`
          }</p>
        </div>
      </a>
  `;
  }
}

export default new AllCountries();
