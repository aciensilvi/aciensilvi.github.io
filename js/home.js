// Video
function loadVideo() {
  var video = document.createElement('video');
  video.id = 'video';
  video.src = 'documents/homepage.mp4';
  video.classList= 'video-style';
  video.playsinline = true;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.setAttribute('playsinline','');
  video.setAttribute('muted','');
  document.getElementById('video').appendChild(video);
}
// Animate homepage logo
const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element);

  node.classList.add(`${prefix}animated`, animationName);
  //node.classList.add(`${prefix}animated`, animationName).setProperty('--animate-duration', '2s');

  // When the animation ends, we clean the classes and resolve the Promise
  function handleAnimationEnd(event) {
    event.stopPropagation();
    node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
  }

  node.addEventListener('animationend', handleAnimationEnd, {once: true});
});
// Normal click 
// document.getElementById("homepageLogo").addEventListener("click", animateElement);
// document.getElementById("homepageLogo").onclick = () => {animateHomepageLogo()};
// Click that adapts depending on device (seems to work on most devices)
const eventBasedOnDevice = navigator.userAgent.match(/ipod|ipad|iphone/i) ? 'touchstart' : 'click';

document.getElementById("homepageLogo").addEventListener(eventBasedOnDevice, function event(event) {
 
  animateHomepageLogo(); //what you want to happen onclick
});

function animateHomepageLogo() {
switch(Math.floor(Math.random() * 5)) {
  case 0 : animateCSS('.homepageLogo', 'flip'); break;
  case 1 : animateCSS('.homepageLogo', 'heartBeat'); break;
  case 2 : animateCSS('.homepageLogo', 'hinge'); break;
  case 3 : animateCSS('.homepageLogo', 'rubberBand'); break;
  case 4 : animateCSS('.homepageLogo', 'tada'); break;
}
}

// Hide the logo in the menu if logo is seen on the page
document.querySelector("nav a").style.visibility = "hidden";
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("homepageLogo");
  if (window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)) {
      document.querySelector("nav a").style.visibility = "hidden";
  } else {
    document.querySelector("nav a").style.visibility = "visible";
  }
});

// Scroll to shop section javascript
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".scroller a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      const targetElement = document.querySelector(target);

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const duration = 500;
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easeFunction = progress => progress; // You can replace this with your desired easing function

          window.scrollTo(0, window.scrollY + easeFunction(progress) * (offsetTop - window.pageYOffset));

          if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
          }
        }

        requestAnimationFrame(scrollAnimation);
      }
    });
  });
});