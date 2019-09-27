// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });


typeWriter();
var i = 0;
var txt = 'Matt Roger';

function typeWriter() {
  if (i < txt.length) {
    $("#name").text += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}