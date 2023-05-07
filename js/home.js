
// Lazy video 
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "documents/homepage") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });  

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