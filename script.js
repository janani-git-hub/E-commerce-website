window.addEventListener("scroll", function() {
  let scroll = window.scrollY;
  document.querySelector(".scroll-image").style.transform =
    "translateY(" + scroll * 0.3 + "px)";
});