$("#my-email").on("click", function () {
  alert("Matt's Email Was Copied To Clipboard!");
});
var clipboard = new ClipboardJS(".btn");

clipboard.on("success", function (e) {
  console.log(e);
});

clipboard.on("error", function (e) {
  console.log(e);
});

$(".contact-form-button").on("click", function () {
  $(".main-nav").hide();
  $(".contact-details").hide();
  $(".contact-form-modal").fadeIn("slow");
});
$(".close-modal").on("click", function () {
  $(".main-nav").fadeIn("slow");
  $(".contact-details").fadeIn("slow");
  $(".contact-form-modal").hide();
});



// email form
var myform = $("form#myform");
myform.on(  "click", "button", function(event){
    event.preventDefault();
    console.log(this)
    console.log(event)
	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});


  var service_id = "default_service";

  var template_id = "personal_contact";
  myform.find("button").text("Sending...");
  console.log(` username ${params.user_name}`)
  if(!params.user_name || !params.user_email ||!params.message){
      alert("Please fill out all of the information")
      }else{
          emailjs.send(service_id, template_id, params)
          .then(function(){ 
                
               alert("Sent!");
               myform.find("button").text("Send");
               $(".main-nav").fadeIn("slow");
               $(".contact-details").fadeIn("slow");
               $(".contact-form-modal").hide();
             }, function(err) {
               alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
               myform.find("button").text("Send");
            });
        
          return false;
          
        }
    });
        

