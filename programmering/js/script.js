//Gem og vis header
let myheader = document.getElementById("mainHeader");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myheader.style.display = "flex";
  } else {
    myheader.style.display = "none";
  }
}

//Fade out video
let video = document.querySelector('video');
window.addEventListener('scroll' , function(){
  let value = 1 + window.scrollY/-600;
  video.style.opacity = value;
})