const header = document.querySelector("[data-header]");
const formModal = document.querySelector("[data-form-modal]");
const openFormButtons = document.querySelectorAll("[data-open-form]");
const closeFormButtons = document.querySelectorAll("[data-close-form]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function openForm(event) {
  event.preventDefault();
  formModal.hidden = false;
  document.body.style.overflow = "hidden";
  const firstInput = formModal.querySelector("input");
  if (firstInput) firstInput.focus();
}

function closeForm() {
  formModal.hidden = true;
  document.body.style.overflow = "";
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
openFormButtons.forEach((button) => button.addEventListener("click", openForm));
closeFormButtons.forEach((button) => button.addEventListener("click", closeForm));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !formModal.hidden) closeForm();
});
