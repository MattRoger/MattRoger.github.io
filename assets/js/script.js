$(document).ready(function() {
    loadAboutMe()
})


$("#aboutMeBtn").on("click", function () {    
    loadAboutMe()
})

function loadAboutMe(){
    $(".aboutTextBox").empty();
    aboutImg();
    const aboutMeDiv = $("<div>").addClass("aboutLeftWrapper");;
    const aboutMeHead = $("<h3>").addClass("aboutHead");
    aboutMeHead.text("A little about me");
    const aboutMeText = $("<div>").addClass("aboutMeText");
    const p1 = $("<p>")
    p1.text("A University of Denver full-stack coding Bootcamp, with a Bachelors in Fine arts looking for a place to grow his skills. I love that coding feeds my creative side and the need for a challenge. ");
    const p2 = $("<p>");
    p2.text("I am currently the lab/social media manager at Denver Pro Photo. There, my responsibilities include, but are not limited to providing high-quality lab services, managing the store’s website, and fostering business by creating sales and mass email campaigns to bring customers into the store. I currently have an open rate averaging around 30%, above the industry average.");
    const p3 = $("<p>");
    p3.text("My attention to detail and dedication to providing customers with the best quality services has led the company to increase sales, not just the lab but across the board. One of my favorite projects to bring attention to Denver Pro Photo was organizing an online photo contest. I was able to get our supply dealers to sponsor the contest and provide prizes.");
    const p4 = $("<p>");
    p4.text("As I transition from my career in photography into a career in coding, I am looking for a company that will help me grow my skills as a web developer, but that will also value my past experience in the art world");
    const selfImage = $("<img>").attr("src", "assets/img/self.jpg");
    selfImage.addClass("selfImage");
    aboutMeDiv.append(aboutMeHead, aboutMeText);
    aboutMeText.append(p1, selfImage, p2, p3, p4);
    $(".aboutTextBox").append(aboutMeDiv);
}
$("#techSkills").on("click", function () {
    $(".aboutTextBox").empty();
    skillsImg();
    const aboutMeDiv = $("<div>").addClass("aboutLeftWrapper");;
    const aboutMeHead = $("<h3>").addClass("aboutHead");
    aboutMeHead.text("The Skills That Pay The Bills");
    const aboutMeText = $("<div>").addClass("aboutMeText");
    const p1 = $("<p>")
    p1.text("A University of Denver full-stack coding Bootcamp, with a Bachelors in Fine arts looking for a place to grow his skills. I love that coding feeds my creative side and the need for a challenge. ");

    const ul1 = $("<ul>").addClass("skillsList");
    ul1.text("Languages");
    const languages = ["HTML", "CSS", "JavaScript ES6"]
    for (i = 0; i < languages.length; i++) {
        const li = $("<li>").text(languages[i]);
        ul1.append(li)
    }
    const ul2 = $("<ul>").addClass("skillsList");
    ul2.text("Frameworks");
    const frameworks = ["Bootstrap", "Reactstrap", "Node.js"]
    for (i = 0; i < frameworks.length; i++) {
        const li = $("<li>").text(frameworks[i]);
        ul2.append(li)
    }
    const ul3 = $("<ul>").addClass("skillsList");
    ul3.text("DataBases");
    const dbs = ["MySQL", "Sequelize", "MongoDB",
        "Mongoose", "Firebase"]
    for (i = 0; i < dbs.length; i++) {
        const li = $("<li>").text(dbs[i]);
        ul3.append(li)
    }
    const ul4 = $("<ul>").addClass("skillsList");
    ul4.text("Other Great Coding Skills");
    const other = ["JQuery", "React", "Styled-Components", "NPMs", "Express.js","Pug.js ", "Responsive Web Design", "Adobe Photoshop"]
    for (i = 0; i < other.length; i++) {
        const li = $("<li>").text(other[i]);
        ul4.append(li)
    }
    const ul5 = $("<ul>").addClass("skillsList");
    ul5.text("More Amazing Skills");
const other2 = ["Photography","Mass Email Marketing", "Social Media Marketing","Adobe Lightroom", "Team Leadership", "Time Management"]
    for (i = 0; i < other2.length; i++) {
        const li = $("<li>").text(other2[i]);
        ul5.append(li)
    }

    const iconBar=$("<div>").addClass("iconBar")
    const i1=$("<i>").addClass("fab");
    i1.addClass("fa-html5")

    const i2=$("<i>").addClass("fab");
    i2.addClass("fa-css3-alt")

    const i3=$("<i>").addClass("fab");
    i3.addClass("fa-js-square");

    const i4=$("<i>").addClass("fab");
    i4.addClass("fa-bootstrap");

    const i5=$("<i>").addClass("fab");
    i5.addClass("fa-node");

    const i6=$("<i>").addClass("fab");
    i6.addClass("fa-react");

    const i7=$("<i>").addClass("fab");
    i7.addClass("fa-npm");

    const i8=$("<i>").addClass("fab");
    i8.addClass("fa-adobe");

    iconBar.append(
        i1,i2,i3,i4,i5,i6,i7,i8)
    aboutMeDiv.append(aboutMeHead, aboutMeText, iconBar);
    aboutMeText.append(p1, ul1, ul2, ul3, ul4, ul5);
    $(".aboutTextBox").append(aboutMeDiv);
})
$("#socialSkills").on("click", function () {
    console.log("click");
    socImg()
    $(".aboutTextBox").empty();
    console.log("working")
    const aboutMeDiv = $("<div>");
    const aboutMeHead = $("<h3>");
    aboutMeHead.text("a third thing");
    const aboutMeText = $("<p>");
    aboutMeText.text(`Good news, everyone! There's a report on TV with some very bad news! You wouldn't. Ask anyway! You seem malnourished. Are you suffering from intestinal parasites? My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.
            
            You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! Why would a robot need to drink? Daddy Bender, we're hungry. Yeah. Give a little credit to our public schools. And why did 'I' have to take a cab?
         
            `)
    aboutMeDiv.append(aboutMeHead, aboutMeText);
    $(".aboutTextBox").append(aboutMeDiv)
})



function aboutImg() {
    $(".aboutSwitch").show()
    $(".aboutSwitch2").hide()
    $(".aboutSwitch3").hide()
}
function skillsImg() {
    $(".aboutSwitch").hide()
    $(".aboutSwitch3").hide()
    $(".aboutSwitch2").show()
}

function socImg() {
    $(".aboutSwitch3").show()
    $(".aboutSwitch2").hide()
    $(".aboutSwitch").hide()
}


