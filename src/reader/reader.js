var interval = 0;
var wpmInitial = 0; /* serve a poter raggiungere gradualmente i WPM scelti dall'utente */
var wordCounter = 0;
var text, wpm, timer;
var pause=false;

function startInterval (interval) {
    
    timer = setInterval(function () {
        if(wordCounter<text.length) {
            document.getElementById("word").innerHTML = text[wordCounter];
            wordCounter++;
        } else {
            clearInterval(timer);
        }

        // Ogni 5 parole aumenta la velocità di 50 WPM
        if(wordCounter%5==0) {
            if(wpmInitial<wpm) {
                wpmInitial += 50;
                interval = (60000/wpmInitial);
                clearInterval(timer);
                startInterval(interval);
            }
        }
    }, interval);

}

document.getElementById("status").onclick = function () {
    if (pause) {
        pause=false;
        document.getElementById("play").style.display = "none";
        document.getElementById("pause").style.display = "block";
        startInterval(interval);
    } else {
        pause=true;
        document.getElementById("pause").style.display = "none";
        document.getElementById("play").style.display = "block";   
        clearInterval(timer);
    }
}

window.addEventListener("load", function () {
    if ((localStorage.getItem("text") != null && localStorage.getItem("text").length>0) && (localStorage.getItem("wpm") != null)) {

        text = localStorage.getItem("text");
        wpm = localStorage.getItem("wpm");

        text = text.split(" ");
        
                
        if(wpm<=200)
            wpmInitial=50;
        else
            wpmInitial=150;

        interval = (60000/wpmInitial);
        startInterval(interval);

    }
})