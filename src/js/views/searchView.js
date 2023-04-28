class SearchView {
  _parentElement = document.querySelector(`.form__group`);

  getQuery() {
    const query = this._parentElement.querySelector(`.search-input`).value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentElement.querySelector(`.search-input`).value = ``;
  }
  addHandlerSerach(handler) {
    [`submit`, `change`].forEach(ev =>
      this._parentElement.addEventListener(ev, (e) => {
        e.preventDefault();
        handler();
      })
    );
  }
}
export default new SearchView();
// const fake = fetch(https://restcountries.com/v3.1/)