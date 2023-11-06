let newRow = document.getElementById("newRow");
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
  let row = document.createElement("tr");
  
  let nameCell = document.createElement("td");
  nameCell.textContent = this.name;

  let minCustomerCell = document.createElement("td");
  minCustomerCell.textContent = this.minCustomer;

  let maxCustomerCell = document.createElement("td");
  maxCustomerCell.textContent = this.maxCustomer;

  let avgCookieCell = document.createElement("td");
  avgCookieCell.textContent = this.avgCookie;

  row.appendChild(nameCell);
  row.appendChild(minCustomerCell);
  row.appendChild(maxCustomerCell);
  row.appendChild(avgCookieCell);

  newRow.appendChild(row);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let theStore = new newStores(newStoreObject.name, newStoreObject.minCustomer, newStoreObject.maxCustomer, newStoreObject.avgCookie);
  allStores.push(theStore);
  theStore.render();
  form.reset(); // Clear the form input fields
  newStoreObject = {}; // Reset the newStoreObject
});
