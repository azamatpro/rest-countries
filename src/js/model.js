import { getJSON } from "./config.js";
import { API_URL } from "./helper.js";

export const state = {
  allCountries: [],
  country: {},
  borderCountry: {},
  regions: [],
  searchCountry: {},
};

export const getAllCountry = async function () {
  try {
    const data = await getJSON(`${API_URL}all`);
    state.allCountries = data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByName = async function (country) {
  try {
    const [data] = await getJSON(`${API_URL}name/${country}`);
    state.country = data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBorderData = async function (border) {
  try {
    const data = await getJSON(`${API_URL}alpha/${border}`);
    state.borderCountry = data;
  } catch (error) {
    throw error;
  }
};

export const getCountryByRegion = async function (region) {
  try {
    const data = await getJSON(
      `${region === `all` ? `${API_URL}all` : `${API_URL}region/${region}`}`
    );
    state.regions = data;
  } catch (error) {
    throw error;
  }
};

export const getCountryBySearch = async function (country) {
  try {
    const data = await getJSON(`${API_URL}name/${country}`);
    state.searchCountry = data;
  } catch (error) {
    throw error;
  }
};
