window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  openMessage();
  setTimeout(
    function logoMessage(){
      const logo= $("<img>");
      logo.attr("src", "./assets/img/Star_Wars_logo.png");
      $(".logo").append(logo)     
      console.log("out")  
    }
    ,3000
    )
   setTimeout(
     function crawl(){     
       const pt=$("<p>").text("Episode III")
       const ph=$("<h1>").text("A New Beginning")
       $(".title").append(pt, ph)
       const p1=$("<p>").text("It is a period of peace. Rebel team leader and recent University of Denver full-stack coding Bootcamp, Matt Roger, looks for new opportunities. At his current position, he launches highly effective stikes with mass email marketing")
       const p2=$("<p>").text("Trained in the art of Full-stack development and strong with the creative side of the force, this rebel coder is looking for a new company to grow with and fight the galactic empire of mediocre web design")
       const p3=$("<p>").text(" Pursued by the Empire’s sinister agents, Matt races home aboard his starship, custodian of the plans that can save his people and restore creativity to the galaxy…")
      $(".crawl").append(p1, p2, p3)    
      },7500
   )
   
  });
  
  function openMessage (){
    const openMessage=$("<p>")
    openMessage.text("To seek something is to believe in its possibility.");
    $(".opening").append(openMessage)
    $(".opening").fadeOut(3000)
  }
