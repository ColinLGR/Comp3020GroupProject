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