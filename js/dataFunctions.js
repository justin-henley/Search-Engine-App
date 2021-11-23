export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  const regex = /[ ]{2,}/gi;
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  // TODO
  console.log("getSearchTerm");
  console.log(`Raw: ${rawSearchTerm}\nSearch: ${searchTerm}`);
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const wikiSearchString = getWikiSearchString(searchTerm);
  const wikiSearchResults = await requestData(wikiSearchString);
  let resultArray = [];
  if (wikiSearchResults?.hasOwnProperty("query")) {
    resultArray = processWikiResults(wikiSearchResults.query.pages);
  }
  // TODO
  console.log("retrieveSearchResults");
  console.log(
    `Search String: ${searchString}\n Wiki Results: ${wikiSearchResults}\n Results Array: ${resultArray}`
  );
  return resultArray;
};

const getWikiSearchString = (searchTerm) => {
  const maxChars = getMaxChars();
  const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages%7Cextracts&list=search&srsearch=meaning`;
  const searchString = encodeURI(rawSearchString);
  // TODO
  console.log("getWikiSearchString");
  console.log(
    `Search Term: ${searchTerm}\nMax Chars: ${maxChars}\nRaw Search String: ${rawSearchString}\nSearch String: ${searchString}`
  );
  return searchString;
};

const getMaxChars = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxChars;
  if (width < 414) maxChars = 65;
  else if (width >= 414 && width < 1400) maxChars = 100;
  else if (width >= 1400) maxChars = 130;
  return maxChars;
};

const requestData = async (searchString) => {
  try {
    const response = await fetch(searchString);

    if (!response.ok) throw new Error("Status code not in 200-299 range");

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const processWikiResults = (results) => {
  const resultArray = [];
  Object.keys(results).forEach((key) => {
    const id = key;
    const title = results[key].title;
    const text = results[key].extract;
    const img = results[key].hasOwnProperty("thumbnail")
      ? results[key].thumbnail.source
      : null;

    const item = {
      id: id,
      title: title,
      img: img,
      text: text,
    };

    resultArray.push(item);
  });

  return resultArray;
};
