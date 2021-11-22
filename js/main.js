import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";
import { buildSearchResults } from "./searchResults.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // set the focus
  setSearchFocus();

  // TODO 3 listeners clear text

  // 1 listener on form
  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch());
};

// Procedural Workflow Function
const submitTheSearch = (event) => {
  event.preventDefualt();
  // delete search results
  // process the search
  processTheSearch();
  // set the focus
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  // TODO clear the stats line

  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);

  if (resultArray.length) buildSearchResults(resultArray);

  // TODOset stats line