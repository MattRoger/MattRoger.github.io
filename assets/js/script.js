$("#aboutMeBtn").on("click", function () {
    console.log("click");
    $(".aboutTextBox").empty();    
   aboutImg();
    const aboutMeDiv = $("<div>");
    const aboutMeHead = $("<h3>");
    aboutMeHead.text("A little about me");
    const aboutMeText = $("<p>");
    aboutMeText.text(`Shut up and get to the point! Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? We'll go deliver this crate like professionals, and then we'll go home. Yes! In your face, Gandhi! All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! I didn't ask for a completely reasonable excuse! I asked you to get busy!
            `)
    aboutMeDiv.append(aboutMeHead, aboutMeText);
    $(".aboutTextBox").append(aboutMeDiv)
})
$("#techSkills").on("click", function () {    
    $(".aboutTextBox").empty();
    skillsImg();
    console.log("working")
    const aboutMeDiv = $("<div>");
    const aboutMeHead = $("<h3>");
    aboutMeHead.text("Skills that pay the Bills");
    const aboutMeText = $("<p>");
    aboutMeText.text(`Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!
            Good news, everyone! There's a report on TV with some very bad news! You wouldn't. Ask anyway! You seem malnourished. Are you suffering from intestinal parasites? My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. Also Zoidberg.
            Daylight and everything. Just once I'd like to eat dinner with a celebrity who isn't  
            `)
    aboutMeDiv.append(aboutMeHead, aboutMeText);
    $(".aboutTextBox").append(aboutMeDiv)
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



function aboutImg(){
    $(".aboutSwitch").show()
    $(".aboutSwitch2").hide()
    $(".aboutSwitch3").hide()
}
function skillsImg(){
    $(".aboutSwitch").hide()
    $(".aboutSwitch3").hide()
    $(".aboutSwitch2").show()
}

function socImg(){
    $(".aboutSwitch3").show()
    $(".aboutSwitch2").hide()
    $(".aboutSwitch").hide()
}
