(function () {
  // see: https://github.com/tscanlin/tocbot#usage
  tocbot.init({
    tocSelector: "#toc",
    contentSelector: ".post",
    // ignoreSelector: "[data-toc-skip]",
    headingSelector: "h2",
    orderedList: false,
    scrollSmooth: false,
  });
})();
