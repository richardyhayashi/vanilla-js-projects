// Get only unique categories.
// Iterate over categories return buttons.
// Make sure to select buttons when they are available.

// Items
import { menu } from './menu.js';

const secCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// Load items
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  //console.log("Shake'n bake!");
  let displayMenu = menuItems.map((item) => {
    //console.log(item);

    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p item-text>${item.desc}</p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join('');

  secCenter.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  //console.log(categories);

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
    </button>`;
    })
    .join('');
  //console.log(categoryBtns);
  container.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll('.filter-btn');
  //console.log(filterBtns);

  // Filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;

      if (category === 'all') {
        displayMenuItems(menu);
        return;
      }

      const menuCategory = menu.filter((menuItem) => {
        //console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      //console.log(menuCategory);
      displayMenuItems(menuCategory);
    });
  });
};
