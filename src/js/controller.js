`use strict`;
import * as model from "./model.js";
import allCountriesView from "./views/allCountriesView.js";
import countryView from "./views/countryView.js";
import searchView from "./views/searchView.js";

// FUNCTIONALITY
const controlAllCountries = async function () {
  try {
    await model.getAllCountry();
    allCountriesView.render(model.state.allCountries);
  } catch (error) {
    allCountriesView.renderError(
      `We could not get all countries. Please, try again :)`
    );
  }
};

// Selecting target country
const controlTargetCountry = async function () {
  try {
    // Get country id
    const name = window.location.hash.slice(1);
    if (!name) throw new Error(`No name found for your country :)`)
    // Getting target country data from model
    await model.getCountryByName(name);
    // Rendering results
    countryView.toggleWindow();
    countryView.render(model.state.country);
  } catch (error) {
    countryView.renderError(
      `We could not get your target country. Please, try again :)`
    );
  }
};
// Borders Functionality
const controlBorderCountry = async (borderCountry) => {
  try {
    const borderName = borderCountry.dataset.name;
    await model.getBorderData(borderName);
    countryView.render(model.state.borderCountry);
  } catch (error) {
    countryView.renderError(
      `We could not get border country. Please, try again :)`
    );
  }
};
// Get country by region functionality
const controlCountriesByRegion = async function (region) {
  try {
    await model.getCountryByRegion(region);
    allCountriesView.render(model.state.regions);
  } catch (error) {
    allCountriesView.renderError(
      `We could not get countries of the ${region}. Please, try again :)`
    );
  }
};

// serach input functionality
const controlSearchResult = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.getCountryBySearch(query);
    allCountriesView.render(model.state.searchCountry);
  } catch (error) {
    allCountriesView.renderError(`No country found for your query :)`);
  }
};

(function () {
  countryView.addHandlerBorder(controlBorderCountry);
  allCountriesView.addHandlerRegion(controlCountriesByRegion);
  searchView.addHandlerSerach(controlSearchResult);
  allCountriesView.addHandlerRender(controlAllCountries);
  allCountriesView.addHandlerTarget(controlTargetCountry);
})();
