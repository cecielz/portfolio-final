
const targetElement = document.querySelector("#form-container");
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!mediaQuery || mediaQuery.matches) {
    console.log("no custom cursor");
  } else {
    new fairyDustCursor({element: targetElement});
    console.log("custom cursor");
  }
  
