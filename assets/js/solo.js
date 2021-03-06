$(document).ready(function () {
  load_solo_projects();
});

const load_solo_projects = () => {
  const catalog = [
    new Project(
      "solo-projects",
      "Pizza Shop",
      "A vanilla JavaScript website for a pizzeria",
      "https://mattroger.github.io/pizzaShop/",
      "https://github.com/MattRoger/pizzaShop/blob/main/README.md",
      "https://github.com/MattRoger/pizzaShop",
      "assets/img/portfolio/pizzaShop.jpg",
      ["JavaScript", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Risk Game Tracker",
      "A React app to track the progress of a game of Risk",
      "https://risk-game-tracker.herokuapp.com/",
      "https://github.com/MattRoger/risk_game_tracker/blob/master/README.md",
      "https://github.com/MattRoger/risk_game_tracker",
      "assets/img/portfolio/risk.png",
      ["React", "Styled-Components", "SCSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Arrowverse Guide",
      "A card based character guide to the arrow universe",
      "https://pacific-plains-33480.herokuapp.com/index.php",
      "https://github.com/MattRoger/arrowverse-character-guide/blob/master/README.md",
      "https://github.com/MattRoger/arrowverse-character-guide",
      "assets/img/portfolio/arrowverse.png",
      ["PHP", "MySQL", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Matt's Weather App",
      "A Weather App that gives the user a forecast based on zipcode",
      "https://matt-rogers-weather-app.herokuapp.com/hello",
      "https://github.com/MattRoger/WeatherForecast/blob/master/README.md",
      "https://github.com/MattRoger/WeatherForecast",
      "assets/img/portfolio/weatherforecast.png",
      [
        "PugJs",
        "Express",
        "NodeJs",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "CSS",
        "HTML",
      ]
    ),
    new Project(
      "solo-projects",
      "Pokemon Fire, Grass, Water",
      "A Take on Rock, Paper, Scissors. Featuring Pokemon.",
      "https://mattroger.github.io/pokemonRPS/",
      "https://github.com/MattRoger/pokemonRPS/blob/master/README.md",
      "https://github.com/MattRoger/pokemonrps",
      "assets/img/portfolio/pokemonFGW.PNG",
      ["JavaScript", "jQuery", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Shopping List",
      "A JavaScript based Shopping list.",
      "https://mattroger.github.io/shoppingList/",
      "https://github.com/MattRoger/shoppingList/blob/main/README.md",
      "https://github.com/MattRoger/shoppingList",
      "assets/img/portfolio/shoppinglist.PNG",
      ["JavaScript", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "DarkRoom Printing",
      "A single mobile responsive page for a local darkroom printer.",
      "https://mattroger.github.io/DarkRoom/",
      "https://github.com/MattRoger/DarkRoom/blob/master/README.md",
      "https://github.com/MattRoger/darkroom",
      "assets/img/portfolio/darkroom.png",
      ["JavaScript", "jQuery", "Bootstrap", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Colorado Clicky Game",
      "A game that tests the user’s memory.",
      "https://clickygame9999.herokuapp.com/",
      "https://github.com/MattRoger/workingClicky/blob/master/README.md",
      "https://github.com/MattRoger/workingClicky",
      "assets/img/portfolio/clickygame.PNG",
      ["React", "Styled", "Components", "Reactstrap"]
    ),
    new Project(
      "solo-projects",
      "Sci-Fi Friend Finder",
      "A web app for finding your sci-fi companion.",
      "https://evening-sea-45437.herokuapp.com/",
      "https://github.com/MattRoger/friendFinder/blob/master/README.md",
      "https://github.com/MattRoger/friendFinder",
      "assets/img/portfolio/friendfinder.PNG",
      ["Node.js", " Express", " JavaScript", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Visit South Park",
      "A single mobile responsive tourism page for the fictional town of South Park",
      "https://mattroger.github.io/visitsouthpark/",
      "https://github.com/MattRoger/visitsouthpark/blob/master/README.md",
      "https://github.com/MattRoger/visitsouthpark",
      "assets/img/portfolio/visitsp.PNG",
      ["CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Star Wars Trivia",
      "A timed trivia game that ranks the user’s Star Wars knowledge.",
      "https://mattroger.github.io/triviaGame/",
      "https://github.com/MattRoger/triviaGame",
      "https://github.com/MattRoger/triviaGame",
      "assets/img/portfolio/starwarstrivia.PNG",
      ["JavaScript", " jQuery", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Liri Bot",
      "Liri bot is a node search tool for Omdb API, bandsInTown api, and spotify.",
      "https://github.com/MattRoger/Liri/blob/master/README.md",
      "https://github.com/MattRoger/Liri/blob/master/README.md",
      "https://github.com/MattRoger/Liri/",
      "assets/img/portfolio/liri.PNG",
      ["JavaScript", "NodeJs", "APIs"]
    ),
    new Project(
      "solo-projects",
      "7 Deadly Sins Giphy Generator",
      "A 7 Deadly Sins gif generator that allows users to play gifs or add their own sins.",
      "https://mattroger.github.io/giphyGen/",
      "https://github.com/MattRoger/giphyGen/blob/master/README.md",
      "https://github.com/MattRoger/giphyGen",
      "assets/img/portfolio/giphygen.PNG",
      ["JavaScript", "jQuery", "Giphy", "API", "CSS", "HTML"]
    ),
    new Project(
      "solo-projects",
      "Kalaxian Crystals",
      "Reach a randomly generated target value by using four crystals with random values.",
      "https://mattroger.github.io/kalaxianKrystalsV2/",
      "https://github.com/MattRoger/crystalGuessGame/blob/master/README.md",
      "https://github.com/MattRoger/kalaxianKrystalsV2/blob/master/README.md",
      "assets/img/portfolio/crystalgame.png",
      ["JavaScript", "jQuery", "CSS", "HTML"]
    ),
    // new Project(
    //   "solo-projects",
    //   "Psychic Game",
    //   "A game where the computer generates a random letter for the player to guess.",
    //   "https://mattroger.github.io/psychic-game/",
    //   "https://github.com/MattRoger/psychic-game/blob/master/README.md",
    //   "https://github.com/MattRoger/psychic-game",
    //   "assets/img/portfolio/psychicGame.PNG",
    //   ["JavaScript", "CSS", "HTML"]
    // ),
  ];

  for (let i = 0; i < catalog.length; i++) {
    // console.log(catalog[i]);
    catalog[i].create_project_card();
  }
};

$(".solo-project-link").on("click", function () {
  $(".solo-projects").fadeIn("slow");
  $(".group-projects").hide();
  $(".mail-chimp-projects").hide();
});
