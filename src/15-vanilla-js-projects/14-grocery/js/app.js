// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';
const localStorageName = 'groceryList';

// ****** EVENT LISTENERS **********
// Submit form
form.addEventListener('submit', addItem);
// Clear items
clearBtn.addEventListener('click', clearItems);
// Load items
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();

  const value = grocery.value.trim();
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);

    // Display alert
    displayAlert('Item added to the list', 'success');
    // Show container
    container.classList.add('show-container');
    // Add to local storage
    addToLocalStorage(id, value);
    // Set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    // Edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert('please enter value', 'danger');
  }
}

// Display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // Remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//Clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }

  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  localStorage.removeItem(localStorageName);
}

// Delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);
  if (!list.children.length) {
    container.classList.remove('show-container');
  }

  displayAlert('Item removed', 'danger');
  setBackToDefault();

  // Remove from local storage
  removeFfromLocalStorage(id);
}

// Edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  // Set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;

  //console.log(editElement);
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}

// Set back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
// localStorage API
// setItem
// getItem
// removeItem
// save as strings
/* localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
const oranges = JSON.parse(localStorage.getItem("orange"));
console.log(oranges);
localStorage.removeItem('orange'); */

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();

  items.push(grocery);
  localStorage.setItem(localStorageName, JSON.stringify(items));
}

function removeFfromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem(localStorageName, JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }

    return item;
  });

  localStorage.setItem(localStorageName, JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem(localStorageName)
    ? JSON.parse(localStorage.getItem(localStorageName))
    : [];
}

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });

    container.classList.add('show-container');
  }
}

function createListItem(id, value) {
  const element = document.createElement('article');
  // Add class
  element.classList.add('grocery-item');
  // Add id
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
  // Append child
  list.appendChild(element);
}
