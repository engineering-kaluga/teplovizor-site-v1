/*
	Tip: You can use Jekyll's include or include_relative
	tag to include Javascript files.
*/

// Enter your JS code here.

const buttons = document.querySelectorAll(".nav ul li a");
const animationTime = 500;

function getCurrentPosition() {
  return document.documentElement.scrollTop;
}

buttons.forEach(button =>
  button.addEventListener("click", event => {
    event.preventDefault();

    var targetOffset = document.getElementById(event.target.hash.substr(1))
    .offsetTop;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.scrollHeight;

    var scrollValue =
      bodyHeight - targetOffset < windowHeight
        ? bodyHeight - windowHeight - getCurrentPosition()
        : targetOffset - getCurrentPosition();

    document.body.style.transition = "transform " + animationTime + "ms ease";
    document.body.style.transform = "translate(0, -" + scrollValue + "px)";

    window.setTimeout(() => {
      document.body.removeAttribute("style");
      window.scrollTo(0, targetOffset);
      window.location.hash = event.target.hash.substr(1);
    }, animationTime);
     
  })
);
