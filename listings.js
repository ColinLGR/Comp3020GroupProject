// We have to watch for clicks on the side images
// With an on-click event

// Switch the url's on the click

let imagePreviews = document.getElementsByClassName("image-preview");

for (let i = 0; i< imagePreviews.length; i++) {
    imagePreviews[i].addEventListener("click", () => {
        let imageURL = imagePreviews[i].getAttribute("src");
        console.log(imageURL);
        document.getElementById("main-photo").setAttribute("src", imageURL);
    })
}

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
