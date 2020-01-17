console.log("contact working")
$("#emailBtn").on("click", function(){
    alert("Copied To Clipboard!")
})
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});
$(".messageBtn").on("click", function(){
    $(".contactFormWrapper").show()
})
$(".closeContact").on("click", function(){
    $(".contactFormWrapper").hide();
})