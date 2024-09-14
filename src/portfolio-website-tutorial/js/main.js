const sections = document.querySelectorAll(".section");
const secBtnCtrl = document.querySelectorAll(".controls");
const secBtns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < secBtns.length; i++) {
    secBtns[i].addEventListener("click", function() {
      let curBtn = document.querySelectorAll(".active-btn");
      curBtn[0].className = curBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  // Section Active
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove selected 
      secBtnCtrl.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
    }

    // Hide other sections
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.add('active');
  });
}

PageTransitions();
