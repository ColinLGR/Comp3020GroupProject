// We have to watch for clicks on the side images
// With an on-click event

// Switch the url's on the click

// Add sliding animation for chat panel

let currentListingData = [];

let openChatButton = document.getElementById("chat-button");
let chatPanel = document.getElementById("chat");
let exitButton = document.getElementById("exit-button");

const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

openChatButton.addEventListener("click", () => {
  chatPanel.classList.add("open");
  openChatButton.style.display = "none";
  chatInput.focus();
});

exitButton.addEventListener("click", () => {
  chatPanel.classList.remove("open");
  openChatButton.style.display = "flex";
});

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");
    bubble.classList.add("user");
    bubble.textContent = chatInput.value;

    chatBody.appendChild(bubble);

    simulateReply(chatInput.value);

    chatBody.scrollTop = chatBody.scrollHeight;

    chatInput.value = "";
  }
});

let simulateReply = (userMsg) => {
  let replyText = "";

  const bookPrice = currentListingData[3];
  const fullDescription = currentListingData[5]; 

  const bookConditionText = fullDescription.includes(",")
    ? fullDescription.substring(fullDescription.indexOf(",") + 1).trim()
    : fullDescription; 

  const bookLocation = currentListingData[6];
  userMsg = userMsg.toLowerCase();

  if (userMsg.includes("available")) {
    replyText = "It's still available, would you like to buy it?";
  } else if (userMsg.includes("hi") || userMsg.includes("hello")) {
    replyText = "Hello! How can I help you with this item?";
  } else if (userMsg.includes("how are you")) {
    replyText = "I'm doing good. Any questions?";
  } else if (
    userMsg.includes("price") ||
    userMsg.includes("cost") ||
    userMsg.includes("how much")
  ) {
    replyText = `The price is firm at $${bookPrice.toFixed(2)}.`;
  } else if (userMsg.includes("lower") || userMsg.includes("negotiate")) {
    let chance = Math.random();

    if (chance < 0.5) {
      replyText =
        "I cannot lower the price, sorry. This is the lowest I will go";
    } else {
      const newPrice = (bookPrice * 0.9).toFixed(2);
      replyText = `Sure, I can take 10% off the price, making it $${newPrice}!`;
    }
  } else if (
    userMsg.includes("location") ||
    userMsg.includes("where") ||
    userMsg.includes("buy") ||
    userMsg.includes("purchase")
  ) {
    replyText = `I'm located near ${bookLocation}. When can you meet?`;
  } else if (userMsg.includes("condition") || userMsg.includes("wear")) {
    replyText = `The condition is as listed: ${bookConditionText}.`;
  } else {
    replyText =
      "I'm not really sure what you mean, can we stick to talking about the textbook";
  }
  setTimeout(() => {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");
    bubble.classList.add("sender");
    bubble.textContent = replyText;

    chatBody.appendChild(bubble);

    replyText = "";

    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
};

// let contactButtons = document.getElementsByClassName("contact-button");
// let contactPopups = document.getElementsByClassName("contact-popup");

// //Show the contact info of the profile that was clicked and hide all the other ones
// for (let i = 0; i< contactButtons.length; i++) {
//     contactButtons[i].addEventListener("click", () => {
//         contactPopups[i].setAttribute("style", "display: block");
//         for(let j = 0; j< contactButtons.length; j++)
//         {
//             if(j != i)
//             {
//                 contactPopups[j].setAttribute("style", "display: none");
//             }
//         }
//     })
// }

// let closeBuddyPopups = document.getElementsByClassName("close-buddy-popup");

// //Close the contact info popup
// for (let i = 0; i< closeBuddyPopups.length; i++) {
//     closeBuddyPopups[i].addEventListener("click", () => {
//         contactPopups[i].setAttribute("style", "display: none");
//     })
// }

const mainPhoto = document.getElementById("main-photo");
const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author"); // Will be used for Category/Subject
const priceElement = document.getElementById("price");
const sellerElement = document.getElementById("seller-name");
const descriptionElement = document.getElementById("description");

const imagePreview = document.querySelectorAll(".image-preview");
const previewsContainer = document.querySelector(".previews");

function loadListingData() {
  const storedDataString = sessionStorage.getItem("data");

  if (!storedDataString) {
    console.error("No listing data found in sessionStorage.");
    document.querySelector(".listing-container").innerHTML =
      "<h2>Error: Listing details could not be loaded. Please return to the home page to select an item.</h2>";
    return;
  }

  const listingData = JSON.parse(storedDataString);

  currentListingData = listingData;

  // image is an array of arrays
  const [images, title, category, price, seller, description] = listingData;

  previewsContainer.innerHTML = "";

  const defaultImageURL =
    "https://arthurmillerfoundation.org/wp-content/uploads/2018/06/default-placeholder.png";

  const defaultImage =
    images && images.length > 0 ? images[0] : defaultImageURL;
  mainPhoto.src = defaultImage;
  mainPhoto.alt = title;

  if (images && images.length > 0) {
    images.forEach((imageUrl) => {
      const previewImg = document.createElement("img");
      previewImg.classList.add("image-preview");
      previewImg.src = imageUrl;
      previewImg.alt = `${title} preview`;

      previewImg.addEventListener("click", () => {
        mainPhoto.src = imageUrl;
      });

      previewsContainer.appendChild(previewImg);
    });
  }

  titleElement.textContent = title;
  authorElement.textContent = `Subject: ${category}`;
  priceElement.textContent = `$${price.toFixed(2)}`;
  sellerElement.textContent = `Seller: ${seller}`;
  descriptionElement.textContent = description;

  const chatHeader = document.querySelector(".chat-header p");
  if (chatHeader) {
    chatHeader.textContent = `Chat with ${seller}`;
  }
}

loadListingData();
