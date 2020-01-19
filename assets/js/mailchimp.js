
const history = [{
    name: "W.H. Jackson, A Pioneer In Western Photography",
    link: "https://mailchi.mp/denverprophoto/w-h-jackson-pioneer-in-western-photography",
    image: "assets/img/mailchimp/whjackson.PNG"
}, {
    name: "Four African-American Photographers You Should Know",
    link: "https://us14.campaign-archive.com/?u=489e748ae6cf06e473449b3da&id=1ef8e207f2",
    image: "assets/img/mailchimp/blackhistory.PNG"
}, {
    name: "Five Women Who Changed Photography",
    link: "https://mailchi.mp/denverprophoto/5-women-who-forever-changed-photography",
    image: "assets/img/mailchimp/women.PNG"
},
]
const  guides= [{
    name: "Understanding Histograms",
    link: "https://mailchi.mp/denverprophoto/understanding-histograms",
    image: "assets/img/mailchimp/histograms.PNG"
}, {
    name: "How To Make A Watermark",
    link: "https://us14.campaign-archive.com/?u=489e748ae6cf06e473449b3da&id=1e0d658d0d",
    image: "assets/img/mailchimp/watermarks.PNG"
}, {
    name: "How To Color Black & White Photos",
    link: "https://mailchi.mp/denverprophoto/learn-to-how-to-colorize-old-bw-photos",
    image: "assets/img/mailchimp/color.PNG"
},
]
const  contest= [{
    name: "Portrait Contest",
    link: "https://mailchi.mp/denverprophoto/show-us-your-best-portrait-404845",
    image: "assets/img/mailchimp/portaitcontest.PNG"
}, {
    name: "Animal Contest",
    link: "https://mailchi.mp/denverprophoto/dppanimalphotographycontest",
    image: "assets/img/mailchimp/animalcontest.PNG"
}, {
    name: "High School Contest",
    link: "https://us14.campaign-archive.com/?u=489e748ae6cf06e473449b3da&id=2bf482223b",
    image: "assets/img/mailchimp/hscontest.PNG"
},
]

const  sales= [{
    name: "Toy Camera's",
    link: "https://us14.admin.mailchimp.com/campaigns/show?id=404901",
    image: "assets/img/mailchimp/toycamera.PNG"
}, {
    name: "New Benro Products",
    link: "https://us14.admin.mailchimp.com/campaigns/show?id=713644",
    image: "assets/img/mailchimp/benro.PNG"
}, {
    name: "Product Sale",
    link: "https://us14.admin.mailchimp.com/campaigns/show?id=404997",
    image: "assets/img/mailchimp/sale.PNG"
},
]

$("#portBtn3").on("click", function () {
    console.log("click")
    loadMCProjects();
})



function loadMCProjects() {
    console.log("click")
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
    portfolio.text("Portfolio");
    contact.text("Contact");
    footer.append(about, portfolio, contact);    
    const projectOuterWrapper = $("<div>");
    projectOuterWrapper.addClass("projectWrapperMC");
   
        const secTitle1=$("<h3>").addClass("secTitle");
        secTitle1.text("Photographic History");       
        const projectInnerWrapper1 = $("<div>").addClass("MCWrap");  
        const projectWrapper1 = $("<div>").addClass("projectGroupWrapper");
            for (let i = 0; i < history.length; i++) {
            const project = $("<div>");
            project.addClass("project").attr("href", history[i].link);
            const title = $("<a>").attr("href", history[i].link);
            title.text(history[i].name);
            title.addClass("projectTitle");
            const previewImg = $("<img>");
            previewImg.attr("src", history[i].image);
            previewImg.attr("href", history[i].link);
            project.append(title, previewImg);
            projectWrapper1.append(project);            
        }
        projectInnerWrapper1.prepend(secTitle1,projectWrapper1);
        projectOuterWrapper.append(projectInnerWrapper1);        
        
        const secTitle2=$("<h3>").addClass("secTitle");
        secTitle2.text("How-To Guides");        
        const projectInnerWrapper2 = $("<div>").addClass("MCWrap");  
        const projectWrapper2 = $("<div>").addClass("projectGroupWrapper");
            for (let i = 0; i < guides.length; i++) {
            const project = $("<div>");
            project.addClass("project").attr("href", guides[i].link);
            const title = $("<a>").attr("href", guides[i].link);
            title.text(guides[i].name);
            title.addClass("projectTitle");
            const previewImg = $("<img>");
            previewImg.attr("src", guides[i].image);
            previewImg.attr("href", guides[i].link);
            project.append(title, previewImg);
            projectWrapper2.append(project);            
        }
        projectInnerWrapper2.prepend(secTitle2,projectWrapper2);
        projectOuterWrapper.append(projectInnerWrapper2);        
        
        const secTitle3=$("<h3>").addClass("secTitle");
        secTitle3.text("Contest");        
        const projectInnerWrapper3 = $("<div>").addClass("MCWrap");
        const projectWrapper3 = $("<div>").addClass("projectGroupWrapper");  
            for (let i = 0; i < contest.length; i++) {
            const project = $("<div>");
            project.addClass("project").attr("href", contest[i].link)
            const title = $("<a>").attr("href", contest[i].link)
            title.text(contest[i].name);
            title.addClass("projectTitle");
            const previewImg = $("<img>");
            previewImg.attr("src", contest[i].image);
            previewImg.attr("href", contest[i].link);
            project.append(title, previewImg);
            projectWrapper3.append(project);            
        }
        projectInnerWrapper3.prepend(secTitle3,projectWrapper3);
        projectOuterWrapper.append( projectInnerWrapper3);        
       

        const secTitle4=$("<h3>").addClass("secTitle");
        secTitle4.text("Sales");        
        const projectInnerWrapper4 = $("<div>").addClass("MCWrap"); 
        const projectWrapper4 = $("<div>").addClass("projectGroupWrapper"); 
            for (let i = 0; i < sales.length; i++) {
            const project = $("<div>");
            project.addClass("project").attr("href", sales[i].link);
            const title = $("<a>").attr("href", sales[i].link);
            title.text(sales[i].name);
            title.addClass("projectTitle");
            const previewImg = $("<img>");
            previewImg.attr("src", sales[i].image);
            previewImg.attr("href", sales[i].link);
            project.append(title, previewImg);
            projectWrapper4.append(project);            
        }
        projectInnerWrapper4.prepend(secTitle4,projectWrapper4);
        projectOuterWrapper.append(projectInnerWrapper4);        
        $(".portGroup").append(projectOuterWrapper, footer);
    
}
