// eslint-disable-next-line func-names
(function () {
  const gif = document.querySelector("img");
  const btn = document.querySelector("button");
  const search = document.querySelector("input");

  async function getGif() {
    try {
      let link =
        "https://api.giphy.com/v1/gifs/translate?api_key=y60pTrIDVUTcG99qteqa4CT5DhrJDpRp&s=dogs";
      if (search.value !== "") {
        link = `https://api.giphy.com/v1/gifs/translate?api_key=y60pTrIDVUTcG99qteqa4CT5DhrJDpRp&s=${search.value}`;
      }
      const response = await fetch(link, { mode: "cors" });
      const gifData = await response.json();
      gif.src = gifData.data.images.original.url;
    } catch (error) {
      gif.src = "./error.gif";
    }
  }
  getGif();
  btn.addEventListener("click", getGif);
})();
