
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

$(document).ready(function () {
    mailchimp_card(history, "history_div")
    mailchimp_card(guides, "guides_div")
    mailchimp_card(sales, "sales_div")
    mailchimp_card(contest, "contest_div")
    $(".mail-chimp-projects").hide();
    $(".guides_div").hide();
    $(".sales_div").hide();
    $(".contest_div").hide();
  });

$(".mail-project-link ").on("click", function(){
    $(".mail-chimp-projects").fadeIn("slow");
    $(".group-projects").hide();
    $(".solo-projects").hide();
})
$(".history").on("click", function(){
    $(".history_div").fadeIn("slow")
    $(".guides_div").hide();
    $(".sales_div").hide();
    $(".contest_div").hide();
})
$(".guides").on("click", function(){
    $(".guides_div").fadeIn("slow");
    $(".history_div").hide()
    $(".sales_div").hide();
    $(".contest_div").hide();
})
$(".sales").on("click", function(){
    $(".sales_div").fadeIn("slow");
    $(".guides_div").hide();
    $(".history_div").hide()
    $(".contest_div").hide();
})
$(".contest").on("click", function(){
    $(".contest_div").fadeIn("slow");
    $(".sales_div").hide();
    $(".guides_div").hide();
    $(".history_div").hide()
})

const mailchimp_card= (category, div_name)=>{
    for(let i = 0;i<category.length;i++){
       
        const name = category[i].name;
        const link = category[i].link;
        const image =  category[i].image;
        const mailchimp_item_wrapper=$("<div>").addClass(`mailchimp-item-wrapper`);
        mailchimp_item_wrapper.addClass(div_name);
        const a = $("<a>").attr("href", link).attr("target", "_blank");
        const img =$("<img>").attr("src", image);
        const h2 = $("<h2>").text(name);
        a.append(img, h2)
        mailchimp_item_wrapper.append(a);
        $(".mailchimp-project-container").append(mailchimp_item_wrapper);
    }
}

