const soloProjects = [{
    name: "Visit South Park",
    about: "A single mobile responsive tourism page for the fictional town of South Park",
    deployed: "https://mattroger.github.io/visitsouthpark/deployed Link",
    github: "https://mattroger.github.io/visitsouthpark/",
    image: "assets/img/portfolio/visitsp.PNG"

},
{
    name: "Colorado Clicky Game",
    about: "A memory games built with reach and styled components",
    deployed: "https://clickygame9999.herokuapp.com/",
    github: "https://github.com/MattRoger/workingClicky",
    image: "assets/img/portfolio/clickygame.PNG"
},
{
    name: "Sci-Fi Friend Finder",
    about: "A web app for finding your sci-fi companion. Using Node.js and Express.jsr",
    deployed: "https://evening-sea-45437.herokuapp.com/",
    github: "https://github.com/MattRoger/friendFinder",
    image: "assets/img/portfolio/friendfinder.PNG"
},
{
    name: "Star Wars Trivia",
    about: "Star Wars trivia game is a timed trivia game. At the end of the game, the player is awarded a rank based on home many questions they answered correct.",
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
    image: "assets/img/portfolio/crystalgame.PNG"
},
{
    name: "Psychic Game",
    about: "A Javascript based game where the computer generates a random letter and the player has to try and guess the letter. This script shows Javascript basics and uses a for loop and a Math.Random function.",
    deployed: "https://mattroger.github.io/psychic-game/",
    github: "https://github.com/MattRoger/psychic-game",
    image: "assets/img/portfolio/psychicGame.PNG"
},
]

$(".groupLink").on("click", function () {
    console.log("click")
    // loadGroupProjects()

})

$("#portBtn2").on("click", function () {
    console.log("click")
    loadSoloProjects();
})
$("#soloLink").on("click", function(){
    console.log("clicked")
    // loadSoloProjects()
})
function loadSoloProjects () {
    $(".portGroup").empty();
    const heading = $("<div>");
    const center =$("<p>")
    center.text("Solo Projects");
    center.addClass("portNav")
    center.addClass("center")

    const leftSide=$("<button>").attr("id","portBtn1")
    const leftdiv=$("<div>").addClass("leftSide")
    const left=$("<p>").text("Group Projects");
    const imgL=$("<img>").attr("src","assets/img/arrowLeft.PNG");    
    left.addClass("portNav")
    left.addClass("portSideLeft")
    leftSide.append(leftdiv,left, imgL)
    leftSide.addClass("groupLink")

    const rightSide=$("<div>").addClass("rightSide")
    const right=$("<p>").text("Mail Chimp");
    const imgR=$("<img>").attr("src","assets/img/arrowRight.PNG");
    right.addClass("portNav")
    right.addClass("portSideRight")

    
    rightSide.append(right, imgR,)
  
    heading.append(leftSide, center, rightSide)
    heading.addClass("portNavBar")

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
        const aboutProject2= $("<p>").text(soloProjects[i].about)
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
        linkWrapper2.append(gitHubLink)
        

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
    $(".portGroup").append(heading, projectWrapper, footer);
}
