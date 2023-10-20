import starRating from '/js/starRating.js'
import readMore from './js/readMore.js'
import colorPicker from './js/colorPicker.js'
import toggleForm from './js/toggleForm.js'

let stars = document.querySelectorAll(".star")
let content = document.querySelector(".content")
let slicedContent = String(content.innerText).slice(0,100)
let secondSlicedContent = String(content.innerText).slice(100)
let moreButton = document.querySelector(".more")
let pickedColor = document.querySelector(".pickedColor")
let divPost = document.querySelector(".pickedColor")
let showForm = document.getElementById("showForm")
let ratingValue = document.querySelector(".rating-value")
let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
content.innerHTML = slicedContent + " ..."

toggleForm(showForm)
starRating(stars, ratingValue)
readMore(moreButton, content, slicedContent, secondSlicedContent)
colorPicker(red, green, blue, pickedColor, divPost)

let addPost = document.getElementById("addPost")
let fileInput = document.getElementById("file")
const postContainer = document.querySelector(".container")

addPost.addEventListener("click", () => {
  let title = document.getElementById("title")
  let content = document.getElementById("content")

  const file = fileInput.files[0]
  if (file && title.value != "" && content.value != "") {
    const reader = new FileReader()
    reader.onload = function(e) {
      const imageUrl = e.target.result
      const divPost = document.createElement('div')
      const imageElement = document.createElement('img')
      const cerateImgContainer = document.createElement('div')
      const h2Title = document.createElement('h2')
      const moreButton = document.createElement('button');
      const pContent = document.createElement('p')
      const divStars = document.createElement('div')
      const stars = divStars.children
      const divRating = document.createElement('div')
      const divBtnAndStars = document.createElement('div')

      let red = document.querySelector(".red")
      let green = document.querySelector(".green")
      let blue = document.querySelector(".blue")
      let pickedColor = document.querySelector(".pickedColor")
      let slicedContent = String(content.value).slice(0, 100)
      let secondSlicedContent = String(content.value).slice(100)

      for (let x = 1; x <= 5; x++) {
        let star = document.createElement('span')
        star.classList.add("star")
        star.innerHTML = "&starf; "
        divStars.appendChild(star)
      }
      if ((content.value).length < 100) {
        moreButton.style.display = "none"
        pContent.textContent = content.value
        divBtnAndStars.style.justifyContent = "center"
        divStars.style.marginRight = "20px"
      }
      if(red.value > 127 || green.value > 127 || blue.value > 127) {
        pContent.style.color = "black"
        h2Title.style.color = "black"
        divStars.style.color = "black"
        divRating.style.color = "black"
      }
      
      imageElement.src = imageUrl
      divPost.classList.add("post")
      cerateImgContainer.classList.add("img")
      h2Title.classList.add("title")
      moreButton.classList.add("more");
      pContent.classList.add("content")
      divStars.classList.add("stars")
      divRating.classList.add('rating-value')
      divBtnAndStars.classList.add("btnAndStars")
      
      pickedColor.style.backgroundColor = "rgb(0,0,0)"
      h2Title.textContent = title.value
      moreButton.textContent = "Czytaj więcej";
      pContent.textContent = slicedContent + " ..."
      divRating.textContent = "0/5"
      
      readMore(moreButton, pContent, slicedContent, secondSlicedContent)
      starRating(stars, divRating)
      colorPicker(red, green, blue, pickedColor, divPost)
      
      cerateImgContainer.appendChild(imageElement)
      divPost.appendChild(cerateImgContainer)
      divPost.appendChild(h2Title)
      divPost.appendChild(pContent);
      divBtnAndStars.appendChild(moreButton); 
      divBtnAndStars.appendChild(divStars)
      divBtnAndStars.appendChild(divRating)
      divPost.appendChild(divBtnAndStars)
      postContainer.appendChild(divPost)

      title.value = ''
      content.value = ''
      fileInput.value = ''
    }
    reader.readAsDataURL(file)
    let form = document.querySelector(".form")
    form.style.display= "none"
  }
  else {
    alert("Uzupełnij wszystkie dane aby wstawić nowy post")
  }
})