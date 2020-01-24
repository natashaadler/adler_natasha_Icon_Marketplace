(() => {
  //this is a module pattern, also called iife
    const mySpan = document.querySelector("main span");
          theSVG = document.querySelector(".svg-image")

function toggleSelected(){
  //add some kind of indicator that someone has selected an icon
  this.classList.toggle('selected');
  console.log(mySpan, theSVG)
}

  //setting up our triggers
  mySpan.addEventListener("click", toggleSelected)
  theSVG.addEventListener("click", toggleSelected)
})();
