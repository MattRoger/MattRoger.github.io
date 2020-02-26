
const soloProjects = [
    {
    name: "Pokemon Fire, Grass, Water",
    about: "A Take on Rock, Paper, Scissors. Featuring Pokemon.",
    tech:"Javascript, jQuery, CSS, HTML",
    deployed: "https://mattroger.github.io/pokemonRPS/",
    github: "https://github.com/MattRoger/pokemonrps",
    image: "assets/img/portfolio/pokemonFGW.PNG"
    
},
{
    name: "DarkRoom Printing",
    about: "A single mobile responsive page for a local darkroom printer.",
    deployed: "https://mattroger.github.io/DarkRoom/",
    github: "https://github.com/MattRoger/darkroom",
    image: "assets/img/portfolio/darkroom.png"
    
},
{
    name: "Visit South Park",
    about: "A single mobile responsive tourism page for the fictional town of South Park",
    tech:"CSS, HTML",
    deployed: "https://mattroger.github.io/visitsouthpark/",
    github: "https://github.com/MattRoger/visitsouthpark",
    image: "assets/img/portfolio/visitsp.PNG"
    
},
{
    name: "Colorado Clicky Game",
    about: "A game that tests the user’s memory.",
    tech:"React, Styled Components, Reactstrap",
    deployed: "https://clickygame9999.herokuapp.com/",
    github: "https://github.com/MattRoger/workingClicky",
    image: "assets/img/portfolio/clickygame.PNG"
},
{
    name: "Sci-Fi Friend Finder",
    about: "A web app for finding your sci-fi companion.",
    deployed: "https://evening-sea-45437.herokuapp.com/",
    github: "https://github.com/MattRoger/friendFinder",
    image: "assets/img/portfolio/friendfinder.PNG"
},
{
    name: "Star Wars Trivia",
    about:"A timed trivia game that ranks the user’s Star Wars knowledge.",
    tech:"JavaScript, jQuery, CSS, HTML",
    deployed: "https://mattroger.github.io/triviaGame/",
    github: "https://github.com/MattRoger/triviaGame",
    image: "assets/img/portfolio/starwarstrivia.PNG"
},
{
    name: "Liri Bot",
    about: "Liri bot is a node search tool for Omdb API, bandsInTown api, and spotify.",
    tech:"JavaScript, Node.js, APIs",
    deployed: "https://github.com/MattRoger/Liri/blob/master/README.md",
    github: "https://github.com/MattRoger/Liri/blob/master/README.md",
    image: "assets/img/portfolio/liri.PNG"
},
{
    name: "7 Deadly Sins Giphy Generator",
    about: "A 7 Deadly Sins gif generator that allows users to play gifs or add their own sins.",
    tech:"JavaScript, jQuery, Giphy API, CSS, HTML",
    deployed: "https://mattroger.github.io/giphyGen/",
    github: "https://github.com/MattRoger/giphyGen",
    image: "assets/img/portfolio/giphygen.PNG"
},
{
    name: "Kalaxian Crystals",
    about: "Reach a randomly generated target value by using four crystals with random values.",
    tech:"JavaScript, jQuery, CSS, HTML",
    deployed: "https://mattroger.github.io/crystalGuessGame/",
    github: "https://github.com/MattRoger/crystalGuessGame",
    image: "assets/img/portfolio/crystalgame.png"
},
{
    name: "Psychic Game",
    about: "A game where the computer generates a random letter for the player to guess.",
    tech:"JavaScript, CSS, HTML",
    deployed: "https://mattroger.github.io/psychic-game/",
    github: "https://github.com/MattRoger/psychic-game",
    image: "assets/img/portfolio/psychicGame.PNG"
},
]
$("#portBtn2").on("click", function(){    
    loadSoloProjects()
})

function loadSoloProjects () {    
   $(".portGroup").empty();
   $(".buttonGroup").css("position","sticky");
   $(".buttonGroup").css("bottom","initial");
   $(".buttonGroup").css("top","0");
   $(".buttonGroup").css("font-size",".5em");
   $(".buttonGroup").addClass("buttonGroupMobile")


   const footer=$("<div>").addClass("mainNav");
   const about=$("<a>").attr("href", "#about");
   const portfolio=$("<a>").attr("href", "#portfolio");
   const contact=$("<a>").attr("href", "#contact");
   about.text("About");
   portfolio.text("Portfolio")
   contact.text("Contact")
   footer.append(about, portfolio, contact)

   const projectWrapper = $("<div>")
   projectWrapper.addClass("projectWrapper")
   for (let i = 0; i < soloProjects.length; i++) {
       const project = $("<div>");
       project.addClass("project");
       const title = $("<a>").attr("href", soloProjects[i].deployed)

       title.text(soloProjects[i].name);
       title.addClass("projectTitle")

       const titleInner = $("<p>")
       titleInner.addClass("innerTitle")
       titleInner.text(soloProjects[i].name)
       const aboutProject = $("<p>").text(soloProjects[i].about);
       const techUsed = $("<p>").text(soloProjects[i].tech);
       aboutProject.append(techUsed)
       aboutProject.addClass("aboutProject")


       const gitHubLink = $("<a>").text("See the Code");
       gitHubLink.attr("href", soloProjects[i].github)
       gitHubLink.addClass("portLinks");

       const dLink = $("<a>").text("See it Live");
       dLink.attr("href", soloProjects[i].deployed);
       dLink.addClass("portLinks");
       const linkWrapper = $("<div>").addClass("linkWrapper");
       linkWrapper.append(gitHubLink, dLink)
       aboutProject.prepend(titleInner);  
       aboutProject.append(linkWrapper);
     

       const previewImg = $("<img>");
       previewImg.attr("src", soloProjects[i].image);
       project.append(aboutProject, title, previewImg);
       projectWrapper.append(project) 
   }
   $(".portGroup").append(projectWrapper, footer);
}
