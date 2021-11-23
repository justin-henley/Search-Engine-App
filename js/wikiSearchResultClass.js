// The object to take over all these functions
// constructor takes a raw result PAGE from wiki search api
class WikiSearchResult extends Object {
  constructor(resultPage) {
    this.id = resultPage.pageid;
    this.title = resultPage.title;
    this.text = resultPage.extract;
    this.img = resultPage.hasOwnProperty("thumbnail")
      ? resultPage.thumbnail.source
      : null;
  }

  generateResultHTML() {
    const resultItem = this.#createResultItem();
    const resultContents = document.createElement("div");
    resultContents.classList.add("resultContents");

    if (this.img) {
      const resultImage = this.#createResultImage();
      resultContents.append(resultImage);
    }

    const resultText = this.#createResultText();
    resultContents.append(resultText);
    resultItem.append(resultContents);

    return resultItem;
  }

  #createResultItem() {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");

    const resultTitle = document.createElement("div");
    resultTitle.classList.add("resultTitle");

    const link = document.createElement("a");
    link.href = `https://en.wikipedia.org/?curid=${this.id}`;
    link.textContent = this.title;
    link.target = "_blank";

    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
  }

  #createResultImage() {
    const resultImage = document.createElement("div");
    resultImage.classList.add("resultImage");
    const img = document.createElement("img");
    img.src = this.img;
    img.alt = this.title;
    resultImage.append(img);
    return resultImage;
  }

  #createResultText() {
    const resultText = document.createElement("div");
    resultText.classList.add("resultText");
    const resultDescription = document.createElement("p");
    resultDescription.classList.add("resultDescription");
    resultDescription.textContent = this.text;
    resultText.append(resultDescription);
    return resultText;
  }
}
