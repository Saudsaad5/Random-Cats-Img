const catImg = document.getElementById("catImg");
const status = document.getElementById("status");
const generateBtn = document.getElementById("generateBtn");

function fetchCat(){
    let url = "https://api.thecatapi.com/v1/images/search"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        catImg.src = data[0].url
    })
}

generateBtn.addEventListener('click',fetchCat);