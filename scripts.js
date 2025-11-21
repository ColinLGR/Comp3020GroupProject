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
        imageUrl0 = URL.createObjectURL(files[0])
        imageEl0 = document.getElementById("imgPreview0")
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
/*
let imgCounter = 0;
function addImage()
{

let maxImgs = 10;
let imgs = [10];
if(imgCounter<maxImgs-1) {
imgs[imgCounter] = 
}
if (imgCounter < maxImgs)
{
imgCounter++;
console.log(imgCounter);

const fullId = "imageUpload"+String(imgCounter)
const fullName = "image"+String(imgCounter)
const fullPrevId = "imgPreview"+String(imgCounter)*/
/*
let div = document.createElement('div');
let label1 = document.createElement('label');
label1.for = 'fullId';
label1.textContent = 'HKFDFANGGBLH';
let input1 = document.createElement('input');
input1.type = 'file';
input1.id=fullId;
input1.name=fullName;
input1.accept="image/*";
input1.onchange = previewImage(event);
let img =document.createElement('img');
img.id=fullPrevId;*/

// div.appendChild(label1);
// div.appendChild(input1);
// div.appendChild(img);
// document.body.appendChild(div);

/*
return(
    <div>
    <label for=>Upload file:</label>
    <input type="file" id=fullId name=fullName accept="image/*" onchange="previewImage(event)">
    <img id=fullPrevId/>
    </div>
)*/