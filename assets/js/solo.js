
const soloProjects = [
    {
    name: "Pokemon Fire, Grass, Water",
    about: "A Take on Rock, Paper, Scissors. Featuring Pokemon and jQuery Dom",
    deployed: "https://mattroger.github.io/pokemonRPS/",
    github: "https://github.com/MattRoger/pokemonrps",
    image: "assets/img/portfolio/pokemonFGW.PNG"

},
    {
    name: "DarkRoom Printing",
    about: "A single mobile responsive page fora local dark room printer. The landing page features an image going from negative to positive. Built with Bootstrap",
    deployed: "https://mattroger.github.io/DarkRoom/",
    github: "https://github.com/MattRoger/darkroom",
    image: "assets/img/portfolio/darkroom.png"

},
    {
    name: "Visit South Park",
    about: "A single mobile responsive tourism page for the fictional town of South Park",
    deployed: "https://mattroger.github.io/visitsouthpark/",
    github: "https://github.com/MattRoger/visitsouthpark",
    image: "assets/img/portfolio/visitsp.PNG"

},
{
    name: "Colorado Clicky Game",
    about: "A memory games built with React and styled components",
    deployed: "https://clickygame9999.herokuapp.com/",
    github: "https://github.com/MattRoger/workingClicky",
    image: "assets/img/portfolio/clickygame.PNG"
},
{
    name: "Sci-Fi Friend Finder",
    about: "A web app for finding your sci-fi companion. Using Node and Express",
    deployed: "https://evening-sea-45437.herokuapp.com/",
    github: "https://github.com/MattRoger/friendFinder",
    image: "assets/img/portfolio/friendfinder.PNG"
},
{
    name: "Star Wars Trivia",
    about: "Star Wars trivia game is a timed trivia game. At the end of the game, the player is awarded a rank based on home many questions they answered correct. Built with jQuery.",
    deployed: "https://mattroger.github.io/triviaGame/",
    github: "https://github.com/MattRoger/triviaGame",
    image: "assets/img/portfolio/starwarstrivia.PNG"
},
{
    name: "Liri Bot",
    about: "Liri bot is a node search tool for Omdb api, bandsInTown api, and spotify. Liri demonstrates use of npm packages deployed by node.",
    deployed: "https://github.com/MattRoger/Liri/blob/master/README.md",
    github: "https://github.com/MattRoger/Liri/blob/master/README.md",
    image: "assets/img/portfolio/liri.PNG"
},
{
    name: "7 Deadly Sins Giphy Generator",
    about: "Click on a button to generate 10 gifs from the giphy api using the button as a search term. Add a sin to the button bar!",
    deployed: "https://mattroger.github.io/giphyGen/",
    github: "https://github.com/MattRoger/giphyGen",
    image: "assets/img/portfolio/giphygen.PNG"
},
{
    name: "Kalaxian Crystals",
    about: "A Javascript based game where the computer generates a random crystal value. The player must figure out how to reach the target number using four crystals with random values.",
    deployed: "https://mattroger.github.io/crystalGuessGame/",
    github: "https://github.com/MattRoger/crystalGuessGame",
    image: "assets/img/portfolio/crystalgame.png"
},
{
    name: "Psychic Game",
    about: "A Javascript based game where the computer generates a random letter and the player has to try and guess the letter. This script shows Javascript basics and uses a for loop and a Math.Random function.",
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
        project.addClass("projectM");      

        const title = $("<a>").attr("href",soloProjects[i].deployed)

        title.text(soloProjects[i].name);
        title.addClass("projectTitle") 

        const titleInner  = $("<p>") 
        const titleInner2  = $("<p>") 
        titleInner.addClass("innerTitle")
        titleInner2.addClass("innerTitle")
        titleInner.text(soloProjects[i].name)     
        titleInner2.text(soloProjects[i].name)     
        const aboutProject = $("<p>").text(soloProjects[i].about);
        const aboutProject2= $("<p>").text(soloProjects[i].about);
        aboutProject.addClass("aboutProject")
        aboutProject2.addClass("aboutProject")
        

        const gitHubLink = $("<a>").text("See the Code");
        const gitHubLink2 = $("<a>").text("See the Code");
        gitHubLink.attr("href",soloProjects[i].github)
        gitHubLink2.attr("href",soloProjects[i].github)
        gitHubLink.addClass("portLinks");
        gitHubLink2.addClass("portLinks");
        
        const dLink = $("<a>").text("See it Live");
        dLink.attr("href",soloProjects[i].deployed);
        dLink.addClass("portLinks");
        const linkWrapper=$("<div>").addClass("linkWrapper");
        const linkWrapper2=$("<div>").addClass("linkWrapper");
        linkWrapper.append(gitHubLink, dLink)
        linkWrapper2.append(gitHubLink2)
        

        aboutProject.prepend(titleInner);
        aboutProject2.prepend(titleInner2);
        aboutProject.append(linkWrapper);
        aboutProject2.append(linkWrapper2);
        
        const portMobile=$("<div>").addClass("portMobile")
        
        const previewImg = $("<img>");
        previewImg.attr("src", soloProjects[i].image);
        project.append( aboutProject, title, previewImg);
        projectWrapper.append(project)
        portMobile.append(aboutProject2);
        projectWrapper.append(portMobile);
        
    }
    $(".portGroup").append(projectWrapper, footer);
}
