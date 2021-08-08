var textArea = document.getElementsByTagName("textarea")[0];
var saveButton = document.getElementById("save-text");
var howItWorks = "Speed reading. \n\
Insert here the text that you would like to read, if you are using a smartphone enable Do Not Distraction mode else if you are using a computer click F11 to pass to the fullscreen mode. \n\
WPM means word per minute, so edit this paramether to adapt it to your demands. \n\
For any issues contact me on GitHub (@LuigiImVector).";

// Popup menu (textarea)
document.getElementsByClassName("side-button")[0].onclick = function () {
    document.getElementById("popup").style.top = "50%";
}

// Popup menu: button status change
textArea.addEventListener("input", function(event) {
    if(textArea.value.length>0)
    {
        saveButton.classList.add("enabled-button");
        saveButton.classList.remove("disabled-button");
    } else {
        saveButton.classList.add("disabled-button");
        saveButton.classList.remove("enabled-button");
    }
});

// Save text
saveButton.onclick = function () {
    if(textArea.value.length > 0) {
        localStorage.setItem("text", textArea.value);

        document.getElementById("text").innerHTML = localStorage.getItem("text").slice(0, 10) + "...";

        document.getElementById("submit").classList.add("enabled-button");
        document.getElementById("submit").classList.remove("disabled-button");

        document.getElementById("popup").style.top = "-50%";
    }
}

// Close textarea button
document.getElementById("close").onclick = function () {
    document.getElementById("confirm-popup").style.top = "50%";
}

// Confirm close popup
document.getElementById("confirm-close").onclick = function () {
    document.getElementById("popup").style.top = "-50%";
    document.getElementById("confirm-popup").style.top = "-50%";
    document.getElementsByTagName("textarea")[0].value = localStorage.getItem("text");
}

document.getElementById("cancel").onclick = function () {
    document.getElementById("confirm-popup").style.top = "-50%";
}

// Tutorial + Example text
document.getElementById("how-it-works").onclick = function () {
    textArea.value = howItWorks;
}

// Start speed reading
document.getElementById("submit").onclick = function () {
    if (localStorage.getItem("text") != null && localStorage.getItem("text").length>0) {
        localStorage.setItem("wpm", document.getElementById("speed").value);

        window.location.href = "reader/reader.html";
    }
}

window.addEventListener("load", function() {
    // Restore text
    if(textArea.value.length>0)
    {
        document.getElementById("text").innerHTML = localStorage.getItem("text").slice(0, 10) + "...";

        saveButton.classList.add("enabled-button");
        saveButton.classList.remove("disabled-button");

        document.getElementById("submit").classList.add("enabled-button");
        document.getElementById("submit").classList.remove("disabled-button");
    }

    // Restore WPM value
    if(localStorage.getItem("wpm") != null) {
        document.getElementById("speed").getElementsByTagName('option')[localStorage.getItem("wpm").slice(0, -2)-1].selected = "selected";
    }
})

/*window.addEventListener("unload", function () {
    localStorage.removeItem("text");

    // update automatically when click submit button
    // localStorage.removeItem("wpm");
})*/

// Easter egg: Save text with CTRL+S

var isCtrl = false;
// When the user releases a key
document.onkeyup=function(e){
    if(e.keyCode == 17)
        isCtrl=false;
}

// When the user is pressing a key
document.onkeydown=function(e){
    if(e.keyCode == 17)
        isCtrl=true;
    if(e.keyCode == 83 && isCtrl) {
        if(textArea.value != "") {
            localStorage.setItem("text", textArea.value);
            document.getElementById("text").innerHTML = localStorage.getItem("text").slice(0, 10) + "...";
        }
        return false; // doens't open the save page window
    }
}
