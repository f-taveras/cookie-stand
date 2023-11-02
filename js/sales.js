// Function to generate a random number between min and max 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructor function to create store info
function StoreInfo(name, minCustomers, maxCustomers, avgCookie,) {
  this.name = name;
  this.minCustomersPerHour = minCustomers;
  this.maxCustomersPerHour = maxCustomers;
  this.averageCookies = avgCookie;
  this.render();
  this.totalPerHour = []
  this.totalPerDay = 0
}

StoreInfo.prototype.render = function() {
  let body = document.getElementById("salesTable");
  let storeRow = document.createElement('tr');
  body.appendChild(storeRow);

  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  storeRow.appendChild(nameCell);

  let salesData = this.estimate();

  for (let i = 0; i < salesData.length; i++) {
    let cell = document.createElement("td");
    cell.textContent = salesData[i];
    storeRow.appendChild(cell);
    
  }
}

let hours = ["6am", "7am", "8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm"];
StoreInfo.prototype.estimate = function() {
  let estimatedSales = [];

  for (let i = 0; i < hours.length; i++) {
    const numCustomers = getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * this.averageCookies);
    estimatedSales.push(hourlySales);
  }

  return estimatedSales;
  


}

let seattle = new StoreInfo("Seattle", 23, 65, 6.3);
let tokyo = new StoreInfo("Tokyo", 3, 24, 1.2);
let dubai = new StoreInfo("Dubai", 11, 24, 3.7);
let paris = new StoreInfo("Paris", 20, 38, 2.3);
let lima = new StoreInfo("Lima", 2, 16, 4.6);
// let totalSales = new StoreInfo("Horly Totals for All Locatoins",)


