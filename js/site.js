document.documentElement.dataset.zuplay = "ready";

var toggle = document.querySelector(".theme-toggle");

if (toggle) {
  var applyLabel = function (theme) {
    var dark = theme === "dark";
    toggle.setAttribute("aria-pressed", dark ? "true" : "false");
    toggle.textContent = dark ? "Tema claro" : "Tema escuro";
  };

  applyLabel(document.documentElement.dataset.theme || "light");

  toggle.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("zuplay.theme", next);
    applyLabel(next);
  });
}

document.querySelectorAll("[data-retry]").forEach(function (button) {
  button.addEventListener("click", function () {
    window.location.reload();
  });
});
