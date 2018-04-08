function domReady(callback) {
  document.addEventListener("DOMContentLoaded", function() {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      callback();
    }
  });
}

export { domReady };
