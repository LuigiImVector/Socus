var textArea = document.getElementsByTagName("textarea")[0];
var saveButton = document.getElementById("save-text");

/* Edit text button */
document.getElementsByClassName("side-button")[0].onclick = function () {
    document.getElementById("input-text-popup").style.top = "50%";
}

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

saveButton.onclick = function () {
    if(textArea.value.length > 0) {
        localStorage.setItem("text", textArea.value);

        document.getElementById("text").innerHTML = localStorage.getItem("text").slice(0, 10) + "...";

        document.getElementById("submit").classList.add("enabled-button");
        document.getElementById("submit").classList.remove("disabled-button");

        document.getElementById("input-text-popup").style.top = "-50%";
    }
}

document.getElementById("exit").onclick = function () {
    if(textArea.value.length <= 0) {
        document.getElementById("submit").classList.add("disabled-button");
        document.getElementById("submit").classList.remove("enabled-button");
    }

    document.getElementById("input-text-popup").style.top = "-50%";
}

window.addEventListener("load", function() {
    if(textArea.value.length>0)
    {
        document.getElementById("text").innerHTML = localStorage.getItem("text").slice(0, 10) + "...";

        saveButton.classList.add("enabled-button");
        saveButton.classList.remove("disabled-button");

        document.getElementById("submit").classList.add("enabled-button");
        document.getElementById("submit").classList.remove("disabled-button");
    }

    /* Aggiungere update WPM */
})