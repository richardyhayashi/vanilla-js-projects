// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const slide = 'slide';

/**
 * 
 */
btn.addEventListener('click', () => {
  if (!btn.classList.contains(slide)) {
    btn.classList.add(slide);
    video.pause();
    return;
  }

  btn.classList.remove(slide);
  video.play();
});

// Preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add("hide-preloader");
});