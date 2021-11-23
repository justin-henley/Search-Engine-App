import WikiSearchResult from "./wikiSearchResultClass.js";

export default class WikiSearch extends Object {
  constructor() {
    super();
  }

  async getSearchResults(rawSearchString) {
    if (rawSearchString === "") return undefined;

    const wikiSearchResults = await this.#requestData(rawSearchString);

    let resultsArray = [];
    if (wikiSearchResults?.hasOwnProperty("query")) {
      resultsArray = this.#processWikiResults(wikiSearchResults.query.pages);
    }
    return resultsArray;
  }

  async #requestData(rawSearchString) {
    const searchURL = this.#getWikiSearchURL(rawSearchString);
    try {
      const response = await fetch(searchURL);
      if (!response.ok) throw new Error("Status code not in 200-299 range");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  #processWikiResults(resultPages) {
    const resultArray = [];
    for (let page of Object.values(resultPages)) {
      const item = new WikiSearchResult(page);
      resultArray.push(item);
    }
    return resultArray;
  }

  #parseSearchString(rawSearchString) {
    const regex = /[ ]{2,}/gi;
    const searchString = rawSearchString.trim().replaceAll(regex, " ");

    return searchString;
  }

  #getWikiSearchURL(rawSearchString) {
    const searchTerm = this.#parseSearchString(rawSearchString);
    const maxChars = this.#getMaxChars();
    const apiEndpoint = "https://en.wikipedia.org/w/api.php";
    let params = `action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const rawSearchURL = apiEndpoint + "?" + params;
    const searchURL = encodeURI(rawSearchURL);
    return searchURL;
  }

  #getMaxChars() {
    const width = window.innerWidth || document.body.clientWidth;
    let maxChars;
    if (width < 414) maxChars = 65;
    else if (width >= 414 && width < 1400) maxChars = 100;
    else if (width >= 1400) maxChars = 130;
    return maxChars;
  }
}
