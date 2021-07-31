var textArea = document.getElementsByTagName("textarea")[0];
var saveButton = document.getElementById("save-text");

/* Edit text button */
document.getElementsByClassName("side-button")[0].onclick = function () {
    document.getElementById("popup").style.top = "50%";
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

        document.getElementById("popup").style.top = "-50%";
    }
}

document.getElementById("close").onclick = function () {
    document.getElementById("confirm-popup").style.top = "50%";
}

document.getElementById("confirm-close").onclick = function () {
    document.getElementById("popup").style.top = "-50%";
    document.getElementById("confirm-popup").style.top = "-50%";
    document.getElementsByTagName("textarea")[0].value = localStorage.getItem("text");
}

document.getElementById("cancel").onclick = function () {
    document.getElementById("confirm-popup").style.top = "-50%";
}

document.getElementById("submit").onclick = function () {
    if (localStorage.getItem("text") != null && localStorage.getItem("text").length>0) {
        localStorage.setItem("wpm", document.getElementById("speed").value);
        console.log("Text: " + localStorage.getItem("text"));
        console.log("WPM: " + localStorage.getItem("wpm"));
        console.log("---------------");

        window.location.href = "reader/reader.html";
    }
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

/*window.addEventListener("unload", function () {
    localStorage.removeItem("text");
    // questo viene aggiunto correttamente cliccando sul submit
    // localStorage.removeItem("wpm");
})*/