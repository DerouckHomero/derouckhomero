function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function addMessage() {
    var message = document.getElementById("message").value;
    if (message.trim() !== "") {
        alert("Message ajouté : " + message);
        closePopup();
    } else {
        alert("Veuillez entrer un message valide.");
    }
}
