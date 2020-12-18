function playsound()
{
    var clip = new Audio();
    clip.src = "Sounds/shot.wav";
    clip.addEventListener("canplaythrough", function(){alert("Loading complete");clip.play();})
}