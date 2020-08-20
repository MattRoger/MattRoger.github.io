$(document).ready(function() {
    load_creative_process()
    load_skills();
    create_about_me();
    $(".creative-container").hide()
    $(".tech-container").hide()

})


// about text
const aboutTextP1 = '  A full stack developer with a passion for frontend. I am a University of Denver full-stack coding Bootcamp graduate, with a Bachelors in Fine arts looking for a place to grow his skills. I love that coding feeds my creative side and the need for a challenge.'
const aboutTextP2 = 'I am currently the lab/social media manager at Denver Pro Photo. My responsibilities include, providing high-quality lab services, managing the store’s website, and fostering business by creating sales and mass email campaigns to bring customers into the store.'
const aboutTextP3 = 'As the lab/social media manager at Denver Pro Photo. My responsibilities include, providing high-quality lab services, managing the store’s website, and fostering business by creating sales and mass email campaigns to bring customers into the store' 
const aboutTextP4 = 'As I transition from my career in photography into a career in coding, I am looking for a company that will help me grow my skills as a web developer, but that will also value my past experience in the art world.'
const linkedIn='https://www.linkedin.com/in/matt-roger/'
const github='https://github.com/MattRoger'
const photo='https://www.facebook.com/MattRogerCo/'

const create_about_me=()=>{
    const about_wrapper = $("<div>").addClass("about-wrapper");
    const about_image=$("<img>").addClass("about-img").attr("src", "./assets/img/self.jpg");
    const text_div = $("<div>").addClass("about-text");
    const p1 = $("<p>").text(aboutTextP1);
    const p2 = $("<p>").text(aboutTextP2);
    const p3 = $("<p>").text(aboutTextP3);
    const p4 = $("<p>").text(aboutTextP4);
    const links = $("<div>").addClass("about-links");
    const a1 = $("<a>").attr("href",linkedIn).attr("target", "_blank").text("LinkedIn");
    const a2 = $("<a>").attr("href",github).attr("target", "_blank").text("Github");
    const a3 = $("<a>").attr("href",photo).attr("target", "_blank").text("Photo");
    links.append( a1, a2, a3);
    text_div.append(p1, p2, p3, p4, links);
    about_wrapper.append(about_image ,text_div);
    $(".about-container").append(about_wrapper);
}

// create tech skills

const languages=["HTML", "CSS", "JavaScript", "PHP", "SQL", "TypeScript"];
const frameworks=["Bootstrap","Reactstrap", "Express"];
// const environments=["Node.js"];
const libraries=["jQuery", "React"];
const databases =["MySQL","Sequelize","MongoDB","Mongoose","Firebase"];
// const compilers=["Pug.js"];
const webdev=["Github", "Node.js", "Pug.js","Styled-Components","NPMs","Responsive Web Design", "Angular", "Adobe Photoshop"];
const other_skills=["Photography"," Mass Email Marketing","Social Media Marketing", "Adobe Lightroom", "Team Leadership" ,"Trello Boards", "Time Management"];

const make_list = (heading, section) =>{
    const div = $("<div>").addClass(`skills-list`);
    const head=$("<h3>").text(heading);
    
    const ul = $("<ul>");
    for(let i=0; i<section.length; i++){
        const li = $("<li>").text(section[i]);
        ul.append(li);
    }
    div.append(head, ul);
    $(".skills-wrapper").append(div);
}
const load_skills = () => {  
        make_list("Languages", languages),
        make_list("Frameworks", frameworks),
        // make_list("Environments",environments),
        make_list("Database", databases),
        make_list("Libraries", libraries),
        // make_list("compilers", compilers),
        make_list("Web Development", webdev),
        make_list("Other Great Skills",other_skills)
}
// creative process

const load_creative_process = ()=>{
const div = $("<div>").addClass("creative-process about-wrapper");
const creative_opening =$("<p>").text(
    "I strive for clean and organized code so I can work more effectively. I thrive in front-end positions, There I can use my coding skills and my visual arts background and create a unique and memorable user experiences.");
const list_items=[
    "Determine the goals of the project",
    "Pseudocode plan out the projects functionality",
    "Use Adobe Photoshop to plan out front-end designs",
    "Combine the projects functionality and front-end designs to create a unique experience",
    "Proof for any bugs or mistakes"]
const list_head = $("<p>").text('For each project I,')
const ul = $("<ul>");
for(let i=0; i<list_items.length; i++){
    const li = $("<li>").text(list_items[i]);
    ul.append(li);
}
div.append(creative_opening,list_head, ul);
$(".creative-container").append(div);
};




// button functions

$(".about-me-link").on("click", function(){
    $(".about-container").fadeIn("slow")
    $(".tech-container").hide()
    $(".creative-container").hide()
    
})
$(".tech-skills-link").on("click", function(){
    $(".tech-container").fadeIn("slow")
    $(".creative-container").hide()
    $(".about-container").hide()
    
    
})
$(".creative-process-link").on("click", function(){
    $(".creative-container").fadeIn("slow")
    $(".tech-container").hide()
    $(".about-container").hide()
    
})

