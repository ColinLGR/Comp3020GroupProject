const defaultImg="/res/default_picture.png";
const previewImage = (event) => {
const theimage = document.getElementById("imgPreview1");
theimage.style.display = "";
const files = event.target.files;
if(files.length > 0) {
    // for (file in files)
    // {
        var imageUrl = URL.createObjectURL(files[0])
        var imageEl = document.getElementById("imgPreview1")
        imageEl.src = imageUrl;
    // }

}
let maxImgs = 10;
let imgs = [10];
if(imgCounter<maxImgs-1) {
    imgs[imgCounter] = imageUrl;
}
console.log(imgs[imgCounter]);
if (imgCounter < maxImgs)
{
    imgCounter++;
    console.log(imgCounter);
    
    const fullId = "imageUpload"+String(imgCounter)
    const fullName = "image"+String(imgCounter)
    const fullPrevId = "imgPreview"+String(imgCounter)
}
}

const removeImage = (event) => {

const remove1 = document.getElementById('imageUpload1')
const remove2 = document.getElementById("imgPreview1")
remove1.value = '';
//remove2.style.display = 'none';
remove2.src=defaultImg;
}

const slideshow = (event) => {

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

div.appendChild(label1);
div.appendChild(input1);
div.appendChild(img);
document.body.appendChild(div);

/*
return(
    <div>
    <label for=>Upload file:</label>
    <input type="file" id=fullId name=fullName accept="image/*" onchange="previewImage(event)">
    <img id=fullPrevId/>
    </div>
)*/