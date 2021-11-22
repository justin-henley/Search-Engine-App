document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // set the focus

  // 3 listeners clear text

  // 1 listener on form
  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch());
};

// Procedural Workflow Function
const submitTheSearch = (event) => {
  event.preventDefualt();
  // delete search results
  // process the search
  // set the focus
};
