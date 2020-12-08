

//set variables
let bottom = document.querySelectorAll(".bottom");
bottom.forEach(function(el) {
  el.classList.add("disappear");
  el.classList.add("toggle");
});

let clicker = document.querySelectorAll(".clicker");


// show brown DIV  when orange bar is clicked -
// put event listener on each clicker

clicker.forEach(function(el) {
  el.onclick = e => {
    // get div then find div 
    let div = e.target.closest("section").querySelector(".bottom");

    // hide divs
    bottom.forEach(function(el) {
      if (el !== div) {
        el.classList.add("disappear");
      }
    });

    //open and close div below
    if (div.classList.contains("disappear")) {
      div.classList.remove("disappear");
    } else {
      div.classList.add("disappear");
    }
  };
});
