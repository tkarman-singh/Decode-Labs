const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector("#nav-links");
const filters = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish");
const form = document.querySelector("#reservation-form");
const note = document.querySelector("#form-note");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filters.forEach((item) => item.classList.toggle("active", item === button));
    dishes.forEach((dish) => {
      dish.classList.toggle("hide", category !== "all" && dish.dataset.category !== category);
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const date = data.get("date");
  const guests = data.get("guests");

  note.textContent = `Thank you, ${name}. Your ${guests.toLowerCase()} request for ${date} has been received.`;
  form.reset();
});
