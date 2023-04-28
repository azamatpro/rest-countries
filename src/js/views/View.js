class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clearAndRenderMurkup(markup);
  }
  _clearAndRenderMurkup(murkup) {
    this._parentElement.innerHTML = ``;
    this._parentElement.insertAdjacentHTML("afterbegin", murkup);
    this._parentElement.style.opacity = 1;
  }
  renderError(message = this._errorMessage) {
    this._parentElement.innerHTML = message;
  }
}
export default View;
