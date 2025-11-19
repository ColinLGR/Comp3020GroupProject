// We have to watch for clicks on the side images
// With an on-click event

// Switch the url's on the click

let imagePreviews = document.getElementsByClassName("image-preview");

for (let i = 0; i< imagePreviews.length; i++) {
    imagePreviews[i].addEventListener("click", () => {
        let imageURL = imagePreviews[i].getAttribute("src");
        console.log(imageURL);
        document.getElementById("main-photo").setAttribute("src", imageURL);
    });
}

// Add sliding animation for chat panel

let openChatButton = document.getElementById("chat-button");
let chatPanel = document.getElementById("chat");
let exitButton = document.getElementById("exit-button")

openChatButton.addEventListener("click", () => {
    chatPanel.classList.add("open");
    openChatButton.style.display = "none";
});

exitButton.addEventListener("click", () => {
    chatPanel.classList.remove("open");
    openChatButton.style.display = "flex";

});

const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

chatInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const bubble = document.createElement("div");
        bubble.classList.add("chat-bubble");
        bubble.textContent = chatInput.value;

        chatBody.appendChild(bubble);

        chatBody.scrollTop = chatBody.scrollHeight;

        chatInput.value = "";
    }
});
