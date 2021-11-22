export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").ariaValueMax.trim();
  const regex = /[ ]{2,}/gi;
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const wikiSearchString = getWikiSearchString;
};

const getWikiSearchString = (searchTerm) => {
  const maxChars = getMaxChars();
};

const getMaxChars = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxChars;
  if (width < 414) maxChars = 65;
  else if (width >= 414 && width < 1400) maxChars = 100;
  else if (width >= 1400) maxChars = 130;
  return maxChars;
};
