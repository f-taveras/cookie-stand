let tableBody = document.getElementById("tableBody");
let tableFooter = document.getElementById("tableFooter");
let form = document.getElementById("storeForm");

let inputs = document.querySelectorAll("input");

let stores = [];
let newStoreObject = {};

function Store(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
}

Store.prototype.render = function() {
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
}

console.log(inputs);
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", function(event) {
    console.log(event.target.name, event.target.value);
    newStoreObject[event.target.name] = event.target.value;
  });
}

function renderFooterRow() {
  tableFooter.innerHTML = '';

  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  let minCustomerCell = document.createElement("td");
  let maxCustomerCell = document.createElement("td");
  let avgCookieCell = document.createElement("td");

  tableFooter.appendChild(row);
  tableFooter.appendChild(nameCell);
  tableFooter.appendChild(minCustomerCell);
  tableFooter.appendChild(maxCustomerCell);
  tableFooter.appendChild(avgCookieCell);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(newStoreObject);
  let theStore = new Store(newStoreObject.name, newStoreObject.minCustomer, newStoreObject.maxCustomer, newStoreObject.avgCookie);
  stores.push(theStore);
  theStore.render();
  renderFooterRow();
});

for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}
