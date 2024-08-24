const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const showSidebar = 'show-sidebar';

/**
 * 
 */
toggleBtn.addEventListener('click', () => {
  console.log(sidebar.classList);
  /* if (sidebar.classList.contains(showSidebar)) {
    sidebar.classList.remove(showSidebar);
  } else {
    sidebar.classList.add(showSidebar);
  } */
  sidebar.classList.toggle(showSidebar);
});

/**
 * 
 */
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove(showSidebar);
});