// Begin conversion to oop

export const retrieveSearchResults = async (searchTerm) => {};

const getWikiSearchString = (searchTerm) => {};

// Bad harness, do better later. Need to test for now
export const searchHarness = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
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

const testData = {
  batchcomplete: "",
  continue: {
    gsroffset: 10,
    continue: "gsroffset||",
  },
  query: {
    pages: {
      17064: {
        pageid: 17064,
        ns: 0,
        title: "Kangaroo",
        index: 1,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG/50px-Kangaroo_Australia_01_11_2008_-_retouch.JPG",
          width: 50,
          height: 33,
        },
        pageimage: "Kangaroo_Australia_01_11_2008_-_retouch.JPG",
        extract:
          "The kangaroo is a marsupial from the family Macropodidae (macropods...",
      },
      161773: {
        pageid: 161773,
        ns: 0,
        title: "Kangaroo Island",
        index: 6,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flinders_Chase_National_Park_01.jpg/50px-Flinders_Chase_National_Park_01.jpg",
          width: 50,
          height: 33,
        },
        pageimage: "Flinders_Chase_National_Park_01.jpg",
        extract:
          "Kangaroo Island, also known as Karta Pintingga (literally 'Island...",
      },
      172577: {
        pageid: 172577,
        ns: 0,
        title: "Kangaroo Jack",
        index: 3,
        extract:
          "Kangaroo Jack is a 2003 crime comedy film produced by Castle...",
      },
      915295: {
        pageid: 915295,
        ns: 0,
        title: "Kangaroo care",
        index: 10,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Postpartum_baby2.jpg/50px-Postpartum_baby2.jpg",
          width: 50,
          height: 33,
        },
        pageimage: "Postpartum_baby2.jpg",
        extract:
          "Kangaroo care also called skin-to-skin contact (SSC), is a technique...",
      },
      221757: {
        pageid: 221757,
        ns: 0,
        title: "Kangaroo court",
        index: 4,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Bundesarchiv_Bild_151-39-23%2C_Volksgerichtshof%2C_Reinecke%2C_Freisler%2C_Lautz.jpg/50px-Bundesarchiv_Bild_151-39-23%2C_Volksgerichtshof%2C_Reinecke%2C_Freisler%2C_Lautz.jpg",
          width: 50,
          height: 32,
        },
        pageimage:
          "Bundesarchiv_Bild_151-39-23,_Volksgerichtshof,_Reinecke,_Freisler,_Lautz.jpg",
        extract:
          "A kangaroo court is a court that ignores recognized standards...",
      },
      4554427: {
        pageid: 4554427,
        ns: 0,
        title: "Kangaroo meat",
        index: 8,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kangaroo_Meat.jpg/50px-Kangaroo_Meat.jpg",
          width: 50,
          height: 33,
        },
        pageimage: "Kangaroo_Meat.jpg",
        extract:
          "Kangaroo meat is produced in Australia from wild kangaroos and...",
      },
      240003: {
        pageid: 240003,
        ns: 0,
        title: "Kangaroo rat",
        index: 5,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kangaroo-rat.jpg/50px-Kangaroo-rat.jpg",
          width: 50,
          height: 33,
        },
        pageimage: "Kangaroo-rat.jpg",
        extract:
          "Kangaroo rats, small mostly nocturnal rodents of genus Dipodomys...",
      },
      215506: {
        pageid: 215506,
        ns: 0,
        title: "Red kangaroo",
        index: 9,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Red_kangaroo_-_melbourne_zoo.jpg/50px-Red_kangaroo_-_melbourne_zoo.jpg",
          width: 50,
          height: 33,
        },
        pageimage: "Red_kangaroo_-_melbourne_zoo.jpg",
        extract:
          "The red kangaroo (Osphranter rufus) is the largest of all kangaroos...",
      },
      60883062: {
        pageid: 60883062,
        ns: 0,
        title: "The Kangaroo Chronicles",
        index: 2,
        extract:
          "The Kangaroo Chronicles are a book series by the German author...",
      },
      178953: {
        pageid: 178953,
        ns: 0,
        title: "Tree-kangaroo",
        index: 7,
        thumbnail: {
          source:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Matschies_tree_kangaroo_Dendrolagus_matschiei_at_Bronx_Zoo_1_cropped.jpg/45px-Matschies_tree_kangaroo_Dendrolagus_matschiei_at_Bronx_Zoo_1_cropped.jpg",
          width: 45,
          height: 50,
        },
        pageimage:
          "Matschies_tree_kangaroo_Dendrolagus_matschiei_at_Bronx_Zoo_1_cropped.jpg",
        extract:
          "Tree-kangaroos are marsupials of the genus Dendrolagus, adapted...",
      },
    },
  },
};

class WikiSearch extends Object {
  #searchTerm = "";
  #searchResults = [];

  constructor(rawSearchTerm) {
    // Generate the results
    this.#retrieveSearchResults(rawSearchTerm);
  }

  hasResults() {
    return this.#searchResults === [] ? false : true;
  }

  getResults() {
    if (this.hasResults()) return this.#searchResults;
    return undefined;
  }

  async #retrieveSearchResults(rawSearchTerm) {
    // Generate the wiki search url
    const wikiSearchString = this.#getWikiSearchString(rawSearchTerm);
    // Fetch the data from wikipedia api
    const wikiSearchResults = await this.#requestData(wikiSearchString);
    // Process results
    let resultArray = [];
    if (wikiSearchResults?.hasOwnProperty("query")) {
      resultArray = processWikiResults(wikiSearchResults.query.pages);
    }
    this.#searchResults = resultArray;
  }

  #getWikiSearchString(rawSearchTerm) {
    // Get parsed search term
    const searchTerm = this.#parseSearchTerm(rawSearchTerm);
    // Build the request components
    const maxChars = this.#getMaxChars();
    const apiEndpoint = "https://en.wikipedia.org/w/api.php";
    let params = `action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    // Build the request
    const rawWikiSearchString = apiEndpoint + "?" + params;
    const wikiSearchString = encodeURI(rawWikiSearchString);
    // Return the request URI
    return wikiSearchString;
  }

  #parseSearchTerm(rawSearchTerm) {
    // Trim whitespace from search string
    rawSearchTerm = rawSearchTerm.trim();
    // Remove extra spaces and return
    const regex = /[ ]{2,}/gi;
    return rawSearchTerm.replaceAll(regex, " ");
  }

  async #requestData(searchString) {
    try {
      const response = await fetch(searchString);

      if (!response.ok) throw new Error("Status code not in 200-299 range");

      return await response.json();
    } catch (error) {
      console.error(error);
    }
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
