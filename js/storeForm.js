let tableBody = document.getElementById("tableBody");
let tableFooter = document.getElementById("tableFooter");
let form = document.getElementById("storeForm");

let inputs = document.querySelectorAll("input");

let allStores = [];
let newStoreObject = {};

function newStores(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
}

newStores.prototype.render = function () {
  let nameCell = document.createElement("td");
  nameCell.textContent = this.name;

  let minCustomerCell = document.createElement("td");
  minCustomerCell.textContent = this.minCustomer;

  let maxCustomerCell = document.createElement("td");
  maxCustomerCell.textContent = this.maxCustomer;

  let avgCookieCell = document.createElement("td");
  avgCookieCell.textContent = this.avgCookie;

  let row = document.createElement("tr");
  row.appendChild(nameCell);
  row.appendChild(minCustomerCell);
  row.appendChild(maxCustomerCell);
  row.appendChild(avgCookieCell);

  tableBody.appendChild(row);
};

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function (event) {
    newStoreObject[event.target.name] = event.target.value;
  });
}

function renderFooterRow() {
  tableFooter.innerHTML = '';

  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  nameCell.textContent = "Footer"; // Set content for the footer row
  let minCustomerCell = document.createElement("td");
  let maxCustomerCell = document.createElement("td");
  let avgCookieCell = document.createElement("td");

  row.appendChild(nameCell);
  row.appendChild(minCustomerCell);
  row.appendChild(maxCustomerCell);
  row.appendChild(avgCookieCell);

  tableFooter.appendChild(row);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(newStoreObject);
  let theStore = new Store(newStoreObject.name, newStoreObject.minCustomer, newStoreObject.maxCustomer, newStoreObject.avgCookie);
  allStores.push(theStore);
  theStore.render();
  renderFooterRow();
  form.reset(); // Clear the form input fields
  newStoreObject = {}; // Reset the newStoreObject
  // You should render the stores after they are added to the array.
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
});

