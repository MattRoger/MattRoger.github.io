const groupProjects = [{
    name: "Zombies Need Brains",
    about: "About Zombies need brains",
    deployed: "deployed Link",
    github: "githublink",
    image: "assets/img/portfolio/zombies.PNG"

},
{
    name: "Spoiler Alert",
    about: "About Spoiler Alert",
    deployed: "deployed Link",
    github: "githublink",
    image: "assets/img/portfolio/spoileralert.PNG"
},
{
    name: "World Watcher",
    about: "About worldWatcher",
    deployed: "deployed Link",
    github: "githublink",
    image: "assets/img/portfolio/worldwatcher.PNG"
}
]

$("#portBtn1").on("click", function () {
    loadGroupProjects()

})
$(".groupLink").on("click", function () {
    console.log("click")
    loadGroupProjects()

})

function loadGroupProjects () {
    $(".portGroup").empty();
    const heading = $("<div>");
    const center =$("<p>")
    center.text("Group Projects");
    center.addClass("portNav")
    center.addClass("center")
    const leftSide=$("<div>").addClass("leftSide")
    const imgL=$("<img>").attr("src","assets/img/arrowLeft.PNG");
    const left=$("<button>").text("MailChimp");
    const right=$("<button>").text("Solo Projects");
    right.attr("id","soloLink")
    const rightSide=$("<div>").addClass("rightSide")
    const imgR=$("<img>").attr("src","assets/img/arrowRight.PNG");
    left.addClass("portNav")
    left.addClass("portSideLeft")
    right.addClass("portNav")
    right.addClass("portSideRight")
    leftSide.append(imgL, left)
    // leftSide.addClass("mailChimpLink")
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
    for (let i = 0; i < groupProjects.length; i++) {
        const project = $("<div>");
        project.addClass("project");
        const title = $("<h3>")
        title.text(groupProjects[i].name);
        const titleInner  = $("<p>") 
        titleInner.addClass("innerTitle")
        titleInner.text(groupProjects[i].name)     
        const aboutProject = $("<p>");
        aboutProject.text(groupProjects[i].about);
        const gitHubLink = $("<a>").text("See the Code");
        const portMobile=$("<div>").addClass("portMobile")
        aboutProject.prepend(titleInner)
        aboutProject.append(gitHubLink);
        aboutProject.addClass("aboutProject")
        // const deployedLink=$("<a>");
        //    going to need a section for the link
        const previewImg = $("<img>")
        previewImg.attr("src", groupProjects[i].image)
        portMobile.append(title, previewImg)
        
        project.append(title, portMobile)
        projectWrapper.append(project);
    }
    $(".portGroup").append(heading, projectWrapper, footer)
}