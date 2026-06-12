const tabButtons = document.querySelectorAll("[data-view]");
const panels = document.querySelectorAll("[data-panel]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;

    tabButtons.forEach((item) => item.classList.toggle("active", item === button));
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === view);
    });
  });
});
