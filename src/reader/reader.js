var interval = 0;
var wpmInitial = 0;
var i = 0;


window.addEventListener("load", function () {
    if ((localStorage.getItem("text") != null && localStorage.getItem("text").length>0) && (localStorage.getItem("wpm") != null)) {

        var text = localStorage.getItem("text");
        var wpm = localStorage.getItem("wpm");

        text = text.split(" ");

        console.log(text);

        console.log("Array: " + text.length);
        console.log("Contatore: " + i);
        console.log("Interval: " + interval);
        console.log("wpmInitial: " + wpmInitial);
        console.log("-----------")

        while(i<text.length) {
            console.log("Contatore: " + i);
            console.log("Interval: " + interval);
            console.log("wpmInitial: " + wpmInitial);
            console.log("-----------")

            document.getElementById("word").innerHTML = text[i];

            if(i%5 == 0) {
                if(wpmInitial < wpm) {
                    wpmInitial += 50;
                    interval = (60000/wpmInitial);
                }
            }
                
            setTimeout(function () {
                
            }, interval);
            i++;
        }
        
        

    }
})