const input = document.querySelector("#input-search");
let search = "";

const dropDownMenu = document.getElementById("dropDown");

//This function is to populate the dropdown menu with episode names
function dropDownFilter() {
  const noOption = document.createElement("option");
  noOption.textContent = "None...";
  dropDownMenu.appendChild(noOption);

  getAllEpisodes().forEach((episode) => {
    //this iterates through the episodes and creates an option for each episode name
    const option = document.createElement("option");
    option.textContent = episode.name;
    dropDownMenu.appendChild(option);
  });
}

//Event listener for dropdown menu change
dropDownMenu.addEventListener("change", function (e) {
  const filteredOption = getAllEpisodes().filter(
    (episode) => episode.name === e.target.value
  );
  removeCards();
  renderEpisodes(filteredOption);
  const count = document.getElementById("count");
  count.textContent = `Displaying 1/73 episodes`;
});

dropDownFilter(); //this is to initialize the dropdown menu

//Function to create a card for a given episode
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
const count = document.getElementById("count");
count.textContent = `Displaying 73/73 episodes`;

//this function is to remove all episode cards from the root element
function removeCards() {
  const cards = document.querySelectorAll("#card");
  cards.forEach((card) => {
    card.remove();
  });
  // console.log(cards.length);
}

//this function is to render a list of episode on the page
function renderEpisodes(episodes) {
  const rootElem = document.getElementById("root");
  episodes.forEach((episode) => {
    const episodeCard = cardForEpisode(episode);
    rootElem.appendChild(episodeCard);
  });
}

//This function is to handle episode search by using filter
function episodeSearch() {
  search = input.value.toLowerCase();

  const filteredEpisodes = search
    ? getAllEpisodes().filter((episode) =>
        episode.name.toLowerCase().includes(search)
      )
    : getAllEpisodes();
  removeCards();
  renderEpisodes(filteredEpisodes);
  const count = document.getElementById("count");
  count.textContent = `Displaying ${filteredEpisodes.length}/73 episodes`;
}

input.addEventListener("input", episodeSearch); //event listener to trigger episode search

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
