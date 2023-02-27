(function () {
  const gif = document.querySelector("img");
  const btn = document.querySelector("button");
  const search = document.querySelector("input");

  function getGif() {
    let link =
      "https://api.giphy.com/v1/gifs/translate?api_key=y60pTrIDVUTcG99qteqa4CT5DhrJDpRp&s=dogs";
    if (search.value !== "") {
      link = `https://api.giphy.com/v1/gifs/translate?api_key=y60pTrIDVUTcG99qteqa4CT5DhrJDpRp&s=${search.value}`;
    }
    fetch(link, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        gif.src = data.data.images.original.url;
      })
      .catch((err) => {
        gif.src = "./error.gif";
        console.log(err);
      });
  }
  getGif();
  btn.addEventListener("click", getGif);
})();
