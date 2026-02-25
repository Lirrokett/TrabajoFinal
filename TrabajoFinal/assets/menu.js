
const btn = document.getElementById("menuBtn");
const panel = document.getElementById("menuPanel");

function closeMenu(){
  panel?.classList.remove("open");
}

btn?.addEventListener("click", (e) => {
  e.stopPropagation();
  panel.classList.toggle("open");
});

document.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
