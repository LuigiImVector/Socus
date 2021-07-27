var textArea = document.getElementsByTagName("textarea")[0];
var saveButton = document.getElementById("save-text");

var text;

/* Edit text button */
document.getElementsByClassName("side-button")[0].onclick = function () {
    document.getElementById("input-text").style.top = "50%";
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
        text = textArea.value;

        var tmp = text;

        document.getElementById("text").innerHTML = tmp.slice(0, 10) + "...";

        document.getElementById("input-text").style.top = "-50%";
    }
}

window.addEventListener("load", function() {
    if(textArea.value.length>0)
    {
        saveButton.classList.add("enabled-button");
        saveButton.classList.remove("disabled-button");
    }
})