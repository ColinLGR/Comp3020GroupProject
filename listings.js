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



let contactButtons = document.getElementsByClassName("contact-button");
let contactPopups = document.getElementsByClassName("contact-popup");

//Show the contact info of the profile that was clicked and hide all the other ones
for (let i = 0; i< contactButtons.length; i++) {
    contactButtons[i].addEventListener("click", () => {
        contactPopups[i].setAttribute("style", "display: block");
        for(let j = 0; j< contactButtons.length; j++)
        {
            if(j != i)
            {
                contactPopups[j].setAttribute("style", "display: none");
            }
        }
    })
}

let closeBuddyPopups = document.getElementsByClassName("close-buddy-popup");

//Close the contact info popup
for (let i = 0; i< closeBuddyPopups.length; i++) {
    closeBuddyPopups[i].addEventListener("click", () => {
        contactPopups[i].setAttribute("style", "display: none");
    })
}
