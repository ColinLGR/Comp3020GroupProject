const defaultImg="/res/default_picture.png";
var imageUrl0 = "";
var imageEl0;
const maxImgs = 3;
let imgs = [maxImgs];
let imgCounter = 0;
let currImage = -1;


const previewImage = (event) => {
    const theimage = document.getElementById("imgPreview0");
    theimage.style.display = "";
    const files = event.target.files;
    if(files.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
            imageUrl0 = reader.result;
            imageEl0.src = imageUrl0;
        };
        reader.readAsDataURL(files[0]);

        imageEl0 = document.getElementById("imgPreview0");
        imageEl0.src = imageUrl0;
        //currImage=-1;
    }
}

const addImage = (event) => {
    if (imageUrl0 != "")
    {
        const imgFile = document.getElementById('imageUpload1');
        const imgPreview = document.getElementById("imgPreview0");
        if(imgCounter<maxImgs-1) {
            imgs[imgCounter] = imageUrl0;
        }
        console.log(imgs[imgCounter]);
        if (currImage != -1)
        {
            const fullPrevId = "imgPreview"+String(currImage);

            var imageEl = document.getElementById(fullPrevId);
            imageEl.src = imageUrl0;
            currImage = -1;
        }
        else if (imgCounter < maxImgs)
        {
            imgCounter++;
            console.log(imgCounter);
            
            const fullPrevId = "imgPreview"+String(imgCounter);

            var imageEl = document.getElementById(fullPrevId);
            imageEl.src = imageUrl0;
        }
        imageUrl0 = "";
        imgFile.value = '';
        imgPreview.src=defaultImg;
    }
}

const removeImage = (event) => {
    const imgPreview = document.getElementById("imgPreview0")
    if (imgPreview.src != defaultImg)
    {
        const imgFile = document.getElementById('imageUpload1')
        imageUrl0 = "";
        imgFile.value = '';
        imgPreview.src=defaultImg;

        if (currImage != -1)
        {
            const fullPrevId = "imgPreview"+String(currImage);
            const removeImg = document.getElementById(fullPrevId);
            removeImg.src=defaultImg;
            currImage=-1;
            imgCounter--;
        }
        console.log(imgCounter);
    }

        
}

function viewBtnImage() {
    const fullPrevId = "imgPreview"+String(currImage)
    const theimage = document.getElementById(fullPrevId);

    var imageUrl = theimage.src;
    imageEl0 = document.getElementById("imgPreview0")
    imageEl0.src = imageUrl;

}

const setButton1 = (event) => {
    // if (document.getElementById("imgPreview1").src != defaultImg)
    // {
        currImage = 1;
        viewBtnImage();
    // }
}
const setButton2 = (event) => {
    // if (document.getElementById("imgPreview2").src != defaultImg)
    // {
        currImage = 2;
        viewBtnImage();
    // }
}
const setButton3 = (event) => {
    // if (document.getElementById("imgPreview3").src != defaultImg)
    // {
        currImage = 3;
        viewBtnImage();
    // }
}

document.getElementById("cancel").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("post").addEventListener("click", () => {
    const data = [
        [imgs],
        document.getElementById("title").value.trim(),
        document.getElementById("price").value.trim(),
        "John Smith",
        document.querySelector('input[name="tag"]:checked')?.value || "",
        document.getElementById("description").value.trim(),
        document.getElementById("address").value.trim()
    ];

    if(data[1] === "") {
        window.alert("Please fill in the title of the Book");
    }
    else if(data[2] === "") {
        window.alert("Please fill in the price of the Book");
    }
    else if(data[4] === "") {
        window.alert("Please choose a tag");
    }
    else if(data[5] === "") {
        window.alert("Please fill the description with the condition of the book");
    }
    else if(data[6] === "") {
        window.alert("Please fill in the address where the book will be picked");
    }
    else {
        sessionStorage.setItem("data", JSON.stringify(data));
        window.location.href = "index.html";
    }
});
