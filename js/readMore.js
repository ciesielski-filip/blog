export default function readMore(moreButton, content, slicedContent, secondSlicedContent) {
  let clicked = true
  moreButton.addEventListener("click", () => {
    if (clicked) {
      content.innerHTML = slicedContent + secondSlicedContent
      moreButton.innerHTML = "Czytaj mniej"
    }
    else {
      content.innerHTML = slicedContent + " ..."
      moreButton.innerHTML = "Czytaj więcej"
    }
    clicked = !clicked
  })
}