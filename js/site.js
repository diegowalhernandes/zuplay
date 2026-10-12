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

var playerWrap = document.querySelector(".player-wrap");
var fullscreenButton = document.querySelector(".player__fullscreen");

if (playerWrap && fullscreenButton) {
  var fullscreenElement = function () {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  };

  var updateFullscreenLabel = function () {
    var active = fullscreenElement() === playerWrap;
    fullscreenButton.textContent = active ? "Sair da tela cheia" : "Tela cheia";
    fullscreenButton.setAttribute("aria-pressed", active ? "true" : "false");
  };

  fullscreenButton.addEventListener("click", function () {
    if (fullscreenElement() === playerWrap) {
      var exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) exit.call(document);
      return;
    }

    var request = playerWrap.requestFullscreen || playerWrap.webkitRequestFullscreen;
    if (request) request.call(playerWrap);
  });

  document.addEventListener("fullscreenchange", updateFullscreenLabel);
  document.addEventListener("webkitfullscreenchange", updateFullscreenLabel);
  updateFullscreenLabel();
}
