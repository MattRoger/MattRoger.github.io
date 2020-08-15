$(document).ready(function () {
   load_group_projects();
   $(".group-projects").hide();
  });

const load_group_projects = () => {
    const catalog = [
        new Project(
            "group-projects",
            "Zombies Need Brains",
            "An educational gaming website to teach spelling and math.",
            "https://lit-crag-22298.herokuapp.com/",
            "https://github.com/MattRoger/Zombies-Need-Brains/blob/master/README.md",
            "https://github.com/MattRoger/Zombies-Need-Brains",
            "assets/img/portfolio/zombies.PNG",
            ["React", "Styled", "Components", "Reactstrap"]
        ),  
        new Project(
            "group-projects",
            "Spoiler Alert",
            "A website for talking about spoilers with fellow fans.",
            "https://shrouded-eyrie-44738.herokuapp.com/",
            "https://github.com/MattRoger/Spoiler-Alert/blob/master/README.md",
            "https://www.reddit.com/",
            "assets/img/portfolio/spoileralert.PNG",
            ["Pug.js", "JavaScript",  "jQuery", "Express", "Passport", "MySql"]
        ),     
        new Project(
            "group-projects",
            "World Watcher",
            "Search for a country to find out about the country's statistics, weather, and news.",
            "https://mattroger.github.io/project1/",
            "https://github.com/MattRoger/project1/blob/master/README.md",
            "https://github.com/MattRoger/project1",
            "assets/img/portfolio/worldwatcher.PNG",
            ["JavaScript"," News API", "Open Weather.api","RESTCountries"," API", "CSS", "HTML"],
        )
    ]    
    
    for (let i = 0; i < catalog.length; i++) {
        // console.log(catalog[i]);
        catalog[i].create_project_card();
      }
    };



$(".group-project-link").on("click", function () {
    $(".group-projects").fadeIn("slow");
    $(".solo-projects").hide();
    $(".mail-chimp-projects").hide();
});
  




