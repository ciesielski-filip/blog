export default function toggleForm(showForm) {
  showForm.addEventListener("click", () => {
    let form = document.querySelector(".form")
    form.style.display = form.style.display === "flex" ? "none" : "flex"
  })
}