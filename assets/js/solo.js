
    const load_solo_projects=() => {
         console.log("solo loaded")
        const catalog = [
            new Project(
                "solo-projects",
                "Pokemon Fire, Grass, Water",
                "A Take on Rock, Paper, Scissors. Featuring Pokemon.",
                "https://mattroger.github.io/pokemonRPS/",
                "https://github.com/MattRoger/pokemonrps",
                "https://github.com/MattRoger/pokemonrps",
                "assets/img/portfolio/pokemonFGW.PNG",
               ["JavaScript", "jQuery","CSS", "HTML"],
               
            ),
            new Project(
                "solo-projects",
                "DarkRoom Printing",
                "A single mobile responsive page for a local darkroom printer.",
                "https://mattroger.github.io/DarkRoom/",
                "https://github.com/MattRoger/darkroom",
                "https://github.com/MattRoger/darkroom",
                "assets/img/portfolio/darkroom.png",
                ["JavaScript", "jQuery", "Bootstrap", "CSS", "HTML"],
            ),
            new Project(
                "solo-projects",
                "Visit South Park",
                "A single mobile responsive tourism page for the fictional town of South Park",
                "https://mattroger.github.io/visitsouthpark/",
                "https://github.com/MattRoger/visitsouthpark",
                "https://github.com/MattRoger/visitsouthpark",
                "assets/img/portfolio/visitsp.PNG",
                ["CSS, HTML"],
            ),
            new Project(
                "solo-projects",
                "Colorado Clicky Game",
                "A game that tests the user’s memory.",
                "https://clickygame9999.herokuapp.com/",
                "https://github.com/MattRoger/workingClicky",
                "https://github.com/MattRoger/workingClicky",
                "assets/img/portfolio/clickygame.PNG",
                ["React, Styled Components, Reactstrap"],
                
                ),
            new Project(
                "solo-projects",
                "Sci-Fi Friend Finder",
                "A web app for finding your sci-fi companion.",
                "https://evening-sea-45437.herokuapp.com/",
                "https://github.com/MattRoger/friendFinder",
                "https://github.com/MattRoger/friendFinder",
                "assets/img/portfolio/friendfinder.PNG",
                "[Node.js, Express, JavaScript, CSS, HTML]",
            ),
            new Project(
                "solo-projects",
                "Star Wars Trivia",
                "A timed trivia game that ranks the user’s Star Wars knowledge.",
                "https://mattroger.github.io/triviaGame/",
                "https://github.com/MattRoger/triviaGame",
                "https://github.com/MattRoger/triviaGame",
                "assets/img/portfolio/starwarstrivia.PNG",
                "[JavaScript, jQuery, CSS, HTML]",
                ),
                new Project(
                "solo-projects",
                "Liri Bot",
                "Liri bot is a node search tool for Omdb API, bandsInTown api, and spotify.",
                "https://github.com/MattRoger/Liri/blob/master/README.md",
                "https://github.com/MattRoger/Liri/blob/master/README.md",
                "https://github.com/MattRoger/Liri/blob/master/README.md",
                "assets/img/portfolio/liri.PNG",
                "[JavaScript, Node.js, APIs]",
                ),
            new Project(
                "solo-projects",
                "7 Deadly Sins Giphy Generator",
                "A 7 Deadly Sins gif generator that allows users to play gifs or add their own sins.",
                "https://mattroger.github.io/giphyGen/",
                "https://github.com/MattRoger/giphyGen",
                "https://github.com/MattRoger/giphyGen",
                "assets/img/portfolio/giphygen.PNG",
                "[JavaScript, jQuery, Giphy API, CSS, HTML]",
                ),
                new Project(
                    "solo-projects",
                    "Kalaxian Crystals",
                    "Reach a randomly generated target value by using four crystals with random values.",
                    "https://mattroger.github.io/crystalGuessGame/",
                    "https://github.com/MattRoger/crystalGuessGame",
                    "https://github.com/MattRoger/crystalGuessGame",
                    "assets/img/portfolio/crystalgame.png",
                    "[JavaScript, jQuery, CSS, HTML]",
                    ),
                    new Project(
                        "solo-projects",
                        "Psychic Game",
                        "A game where the computer generates a random letter for the player to guess.",
                        "https://mattroger.github.io/psychic-game/",
                        "https://github.com/MattRoger/psychic-game",
                        "https://github.com/MattRoger/psychic-game",
                        "assets/img/portfolio/psychicGame.PNG",
                        "[JavaScript, CSS, HTML]",
                        ),
                    ];
                    
                    
              
    for (let i = 0; i < catalog.length; i++) {
        // console.log(catalog[i]);
        catalog[i].create_project_card()
    }

                                            
}

$(".solo-project-button").on("click", function(){
    load_solo_projects();
});