// import {loadgroupProjects} from './solo.js'


const groupProjects = [{
    name: "Zombies Need Brains",
    about: "A educational game built with react",
    deployed: "https://lit-crag-22298.herokuapp.com/",
    github: "https://github.com/MattRoger/Zombies-Need-Brains",
    image: "assets/img/portfolio/zombies.PNG"

},
{
    name: "Spoiler Alert",
    about: "A website for talking about spoilers with fellow fans. This website uses Pug, Express, Passport, and MySql.",
    deployed: "https://shrouded-eyrie-44738.herokuapp.com/",
    github: "https://github.com/MattRoger/Spoiler-Alertgithublink",
    image: "assets/img/portfolio/spoileralert.PNG"
},
{
    name: "World Watcher",
    about: "A group project using multiple api's to create a country information search. Add a country and find the country's statics, weather, and news.",
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
        const titleInner2 = $("<p>")
        titleInner.addClass("innerTitle")
        titleInner2.addClass("innerTitle")
        titleInner.text(groupProjects[i].name)
        titleInner2.text(groupProjects[i].name)
        const aboutProject = $("<p>").text(groupProjects[i].about);
        const aboutProject2 = $("<p>").text(groupProjects[i].about);
        aboutProject.addClass("aboutProject")
        aboutProject2.addClass("aboutProject")


        const gitHubLink = $("<a>").text("See the Code");
        const gitHubLink2 = $("<a>").text("See the Code");
        gitHubLink.attr("href", groupProjects[i].github)
        gitHubLink2.attr("href", groupProjects[i].github)
        gitHubLink.addClass("portLinks");
        gitHubLink2.addClass("portLinks");

        const dLink = $("<a>").text("See it Live");
        dLink.attr("href", groupProjects[i].deployed);
        dLink.addClass("portLinks");
        const linkWrapper = $("<div>").addClass("linkWrapper");
        const linkWrapper2 = $("<div>").addClass("linkWrapper");
        linkWrapper.append(gitHubLink, dLink)
        linkWrapper2.append(gitHubLink2)


        aboutProject.prepend(titleInner);
        aboutProject2.prepend(titleInner2);
        aboutProject.append(linkWrapper);
        aboutProject2.append(linkWrapper2);

        const portMobile = $("<div>").addClass("portMobile")

        const previewImg = $("<img>");
        previewImg.attr("src", groupProjects[i].image);
        project.append(aboutProject, title, previewImg);
        projectWrapper.append(project)
        portMobile.append(aboutProject2);
        projectWrapper.append(portMobile);

    }
    $(".portGroup").append(projectWrapper, footer);
}