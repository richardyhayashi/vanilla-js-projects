// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const showLinks = 'show-links';

navToggle.addEventListener('click', () => {
  //console.log(links.classList);
  //console.log(links.classList.contains("random"));
  //console.log(links.classList.contains("links"));
  /*if (links.classList.contains(showLinks)) {
    links.classList.remove(showLinks);
  } else {
    links.classList.add(showLinks);
  }*/
  links.classList.toggle(showLinks);
})