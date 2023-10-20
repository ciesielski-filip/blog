export default function starRating(stars, ratingValue) {
  for (let x = 0; x < stars.length; x++) {
    stars[x].addEventListener("click", function() {
      if (stars[x].classList.contains("starColor")) {
        for (let i = 0; i < stars.length; i++) {
          stars[i].classList.remove("starColor")
          ratingValue.innerHTML = "0/5"
        }
      }
      else {
        for (let i = 0; i <= x; i++) {
          stars[i].classList.add("starColor")
        }
        ratingValue.innerHTML = (x + 1) + "/5"
      }
    });
  }
}
