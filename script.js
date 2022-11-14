const OnEvent = (doc) => {
  return {
    on: (type, selector, callback) => {
      doc.addEventListener(
        type,
        (event) => {
          if (!event.target.matches(selector)) return;
          callback.call(event.target, event);
        },
        false
      );
    },
  };
};

OnEvent(document).on("click", "#perso-adress", function (e) {
  window.open("https://goo.gl/maps/R6bPUJ2nn7ChRJNw8");
});

OnEvent(document).on("click", "#linkedin-logo", function (e) {
  window.open("https://www.linkedin.com/in/nicolas-nieddu-71406b192");
});

OnEvent(document).on("click", "#gh-logo", function (e) {
  window.open("https://github.com/nnieddu");
});
