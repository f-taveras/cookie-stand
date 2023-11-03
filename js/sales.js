let body = document.getElementById("salesTable");
let footerRow = document.getElementById("tableFooter");
// Function to generate a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructor function to create store info
function StoreInfo(name, minCustomers, maxCustomers, avgCookie) {
  this.name = name;
  this.minCustomersPerHour = minCustomers;
  this.maxCustomersPerHour = maxCustomers;
  this.averageCookies = avgCookie;
  this.totalPerHour = [];
  
  this.totalPerDay = 0;
  this.render();
}

StoreInfo.prototype.render = function() {
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
  
this.calculateTotal();


  
  
    let storeTotalCell = document.createElement('td');
    storeTotalCell.textContent = this.totalPerDay;
    storeRow.appendChild(storeTotalCell);
  
};

StoreInfo.prototype.estimate = function() {
  let estimatedSales = [];
  
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * this.averageCookies);
    estimatedSales.push(hourlySales);
  }
  
  return estimatedSales;
};

StoreInfo.prototype.calculateTotal = function() {
  this.totalPerHour = this.estimate();
  this.totalPerDay = this.totalPerHour.reduce((a, b) => a + b, 0); 
  
};


let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];
let seattle = new StoreInfo("Seattle", 23, 65, 6.3);
let tokyo = new StoreInfo("Tokyo", 3, 24, 1.2);
let dubai = new StoreInfo("Dubai", 11, 24, 3.7);
let paris = new StoreInfo("Paris", 20, 38, 2.3);
let lima = new StoreInfo("Lima", 2, 16, 4.6);
let stores = [seattle, tokyo, dubai, paris, lima];

// Add a row for total sales
let totalRow = document.createElement('tr');
let totalCell = document.createElement('td');
totalCell.textContent = 'Hourly Totals for All Locations';
totalRow.appendChild(totalCell);
let allHours=0;

let hourlyTotal = 0;
let allHourTotal = 0;
for (let i = 0; i < hours.length; i++) {
  
  stores.forEach(store => {
    hourlyTotal += store.totalPerHour[i];
    allHourTotal += store.totalPerDay

  });
  let totalCell = document.createElement('td');
  totalCell.textContent = hourlyTotal;
  totalRow.appendChild(totalCell);
}


let allTotal = document.createElement('td');
allTotal.textContent = allHourTotal;
totalRow.appendChild(allTotal);


footerRow.appendChild(totalRow);


// Function to calculate total sales per store
function calculateStoreTotal(store) {
  let total = 0;
  store.totalPerHour.forEach(hourlySales => {
    total += hourlySales;
  });
  return total;

}




