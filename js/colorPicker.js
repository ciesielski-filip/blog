export default function colorPicker(red, green, blue, pickedColor, divPost) {
  divPost.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`

  red.addEventListener("input", () => {
    pickedColor.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`
  })
  green.addEventListener("input", () => {
    pickedColor.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`
  })
  blue.addEventListener("input", () => {
    pickedColor.style.background = `rgb(${red.value}, ${green.value}, ${blue.value})`
  })

  red.value = 0
  green.value = 0
  blue.value = 0
}