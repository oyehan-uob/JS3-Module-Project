const input = document.querySelector("#input-search");
let search = "";


function cardForEpisode(episode) {
  const rootElem = document.getElementById("root");
  const episodeCard = document
    .getElementById("episode")
    .content.cloneNode(true);

  const title = episodeCard.querySelector("h3");
  title.innerHTML = `${episode.name} - S${String(episode.season).padStart(
    2,
    0
  )}E${String(episode.number).padStart(2, 0)}`;

  const img = episodeCard.querySelector("img");
  img.src = episode.image.medium;

  const text = episodeCard.querySelector("p");
  text.innerHTML = episode.summary;

  rootElem.appendChild(episodeCard);

  return episodeCard;
}

const allEpisodes = getAllEpisodes().map(cardForEpisode);
const allCards = document.body.append(...allEpisodes);


function removeCards() {
  const cards = document.querySelectorAll("#card");
  cards.forEach((card) => {
    card.remove();
  });
  console.log(cards.length);
}




//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;
