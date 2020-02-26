// import {loadgroupProjects} from './solo.js'


const groupProjects = [{
    name: "Zombies Need Brains",
    about: "An educational gaming website to teach spelling and math.",
    tech:"React, Styled Components, Reactstrap",
    deployed: "https://lit-crag-22298.herokuapp.com/",
    github: "https://github.com/MattRoger/Zombies-Need-Brains",
    image: "assets/img/portfolio/zombies.PNG"

},
{
    name: "Spoiler Alert",
    about: "A website for talking about spoilers with fellow fans.",
    tech:"Pug, JavaScript,  jQuery, Express, Passport, MySql.",
    deployed: "https://shrouded-eyrie-44738.herokuapp.com/",
    github: "https://github.com/MattRoger/Spoiler-Alertgithublink",
    image: "assets/img/portfolio/spoileralert.PNG"
},
{
    name: "World Watcher",
    about: "Search for a country to find out about the country's statistics, weather, and news.",
    tech:"JavaScript, news.api, weather.api, CSS, HTML",
    deployed: "https://mattroger.github.io/project1/",
    github: "https://github.com/MattRoger/project1",
    image: "assets/img/portfolio/worldwatcher.PNG"
}
]

$("#portBtn1").on("click", function () {    
    loadGroupProjects()
})




function loadGroupProjects() {
    $(".portGroup").empty();
    $(".portGroup").empty();
    $(".buttonGroup").css("position", "sticky");
    $(".buttonGroup").css("bottom", "initial");
    $(".buttonGroup").css("top", "0");
    $(".buttonGroup").css("font-size", ".5em");
    $(".buttonGroup").addClass("buttonGroupMobile")

    const footer = $("<div>").addClass("mainNav");
    const about = $("<a>").attr("href", "#about");
    const portfolio = $("<a>").attr("href", "#portfolio");
    const contact = $("<a>").attr("href", "#contact");
    about.text("About");
    portfolio.text("Portfolio")
    contact.text("Contact")
    footer.append(about, portfolio, contact)

    const projectWrapper = $("<div>")
    projectWrapper.addClass("projectWrapper")
    for (let i = 0; i < groupProjects.length; i++) {
        const project = $("<div>");
        project.addClass("project");
        const title = $("<a>").attr("href", groupProjects[i].deployed)

        title.text(groupProjects[i].name);
        title.addClass("projectTitle")

        const titleInner = $("<p>")
        titleInner.addClass("innerTitle")
        titleInner.text(groupProjects[i].name)
        const aboutProject = $("<p>").text(groupProjects[i].about);
        const techUsed = $("<p>").text(groupProjects[i].tech);
        aboutProject.append(techUsed)
        aboutProject.addClass("aboutProject")


        const gitHubLink = $("<a>").text("See the Code");
        gitHubLink.attr("href", groupProjects[i].github)
        gitHubLink.addClass("portLinks");

        const dLink = $("<a>").text("See it Live");
        dLink.attr("href", groupProjects[i].deployed);
        dLink.addClass("portLinks");
        const linkWrapper = $("<div>").addClass("linkWrapper");
        linkWrapper.append(gitHubLink, dLink)
        aboutProject.prepend(titleInner);  
        aboutProject.append(linkWrapper);
      

        const previewImg = $("<img>");
        previewImg.attr("src", groupProjects[i].image);
        project.append(aboutProject, title, previewImg);
        projectWrapper.append(project) 
    }
    $(".portGroup").append(projectWrapper, footer);
}