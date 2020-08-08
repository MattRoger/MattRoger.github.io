
class Project {
    constructor(
        title,
        about, 
        deployed, 
        readme, 
        repo, 
        image, 
        
        // category
        ) {
      this.title=title;
      this.about=about;
      this.deployed=deployed;
      this.readme=readme;
      this.repo=repo;
      this.image=image;
    //   this.category=category;
      this.tech=[];
    }

    create_project_card=()=>{
        console.log(this.tech)
        // const title = $("<div>").text(this.title)
        // $(".portfolio-container").append(title)
        // for(let i=0;this.tech.length >1; i++){
        //         const li =$("<p>").text(this.tech[i]);
        //         li.append(title);
        // }
        const flip_card = $("<div>").addClass("flip-card");
        const inner_card = $("<div>").addClass("flip-card-inner");
        const front_card = $("<div>").addClass("flip-card-front").css('background-image',
        `url(${this.image})`);

        const card_banner=$("<h2>").addClass("card-banner").text(this.title);
        front_card.append(card_banner);
        
        const card_back= $("<div>").addClass("flip-card-back");
        const project_name=$("<h2>").addClass("project-name").text(this.title);
        const about_text = $("<p>").addClass("about-text").text(this.about);

        const tech_list=$("<div>").addClass("tech-list");
        const p =$("<p>").text("Built With: ");
        const list =$("<ul>");
        for(let i=0;this.tech.length >1; i++){
            const ul =$("<li>").text(this.tech[i]);
            list.append(ul);
        }
        tech_list.append(p, list);

        const links_div=$("<div>").addClass("project-links");
        const a1 =$("<a>").addClass("deployed-link").attr("href", this.deployed).text("Deployed");
        const a2 =$("<a>").addClass("readme-link").attr("href", this.readme).text("ReadMe");
        const a3 =$("<a>").addClass("repo-link").attr("href", this.repo).text("Repo");
        links_div.append(a1,a2,a3);
        card_back.append(project_name,about_text, tech_list, links_div);
        inner_card.append(front_card, card_back);
        flip_card.append(inner_card);
        $(".portfolio-container").append(flip_card)
        
    }
    
}


