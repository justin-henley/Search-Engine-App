export const deleteSearchResults = () => {
  const parentElement = document.getElementById("searchResults");
  let child = parentElement.lastElementChild;

  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

export const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultHTML = result.generateResultHTML();
    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultHTML);
  });
};

export const clearStatsLine = () => {
  document.getElementById("stats").textContent = "";
};

export const setStatsLine = (numberOfResults) => {
  const statsLine = document.getElementById("stats");
  if (numberOfResults) {
    statsLine.textContent = `Displaying ${numberOfResults} results.`;
  } else {
    statsLine.textContent = "Sorry, no results.";
  }
};
