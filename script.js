function cardForEpisode(episode){
  const episodeCard = document.getElementById("episode").content.cloneNode(true);
  
  const title = episodeCard.querySelector("h3");
  title.innerHTML = `${episode.name} - S${String(episode.season).padStart(2,0)}E${String(episode.number).padStart(2,0)}`;

  const img = episodeCard.querySelector("img");
  img.src = episode.image.medium;

  const text = episodeCard.querySelector("p");
  text.innerHTML = episode.summary;

  return episodeCard;
}

const oneEpisode = cardForEpisode(getOneEpisode());
// document.body.appendChild(oneEpisode);

const allEpisodes = getAllEpisodes().map(cardForEpisode);
document.body.append(...allEpisodes);



// console.log(cardForEpisode(getOneEpisode()));
// document.body.appendChild(cardForEpisode(getOneEpisode()));

// const allCards = getAllEpisodes().map(cardForEpisode);
// console.log(allCards);
// document.body.append(allCards);

// for (const episode in getAllEpisodes()){
//   console.log(cardForEpisode(episode));
//   // console.log(episode);
// }

// cardForEpisode();

// const title = document.querySelector("h2");
// title.textContent = getOneEpisode().name;

// const img = document.querySelector("img");
// img.src = getOneEpisode().image.medium;
// const txt = document.querySelector("p");
// txt.innerHTML = getOneEpisode().summary;




//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
