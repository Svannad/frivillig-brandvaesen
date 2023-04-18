// Video start og stop med musen
const intro = document.querySelectorAll('.intro');
for (let i = 0; i<intro.length; i++){
    intro[i].addEventListener('mouseenter', function(e){
        intro[i].play()
    })
    intro[i].addEventListener('mouseout', function(e){
        intro[i].pause()
    })
}