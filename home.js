// SOUND FUNCTION
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function playHomeSound(){

    setTimeout(
        function () {
            myMusic2 = new sound("sounds/homeSound.mp3");
            myMusic2.play();
        }
        , 2000);

}
