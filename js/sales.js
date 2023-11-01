// Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Constructor function to create store info
function StoreInfo(name, minCustomers, maxCustomers, avgCookie) {
  this.name = name;
  this.minCustomersPerHour = minCustomers;
  this.maxCustomersPerHour = maxCustomers;
  this.averageCookies = avgCookie;
  this.render();
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

StoreInfo.prototype.estimate = function() {
  let hours = ["6am", "7am", "8am"];
  let estimatedSales = [];

  for (let i = 0; i < hours.length; i++) {
    const numCustomers = getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour);
    const hourlySales = Math.ceil(numCustomers * this.averageCookies);
    estimatedSales.push(hourlySales);
  }

  return estimatedSales;
}

let seattle = new StoreInfo("Seattle", 23, 65, 6.3);





/*
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm","2pm" ,"3pm", "4pm", "5pm"];

const seattle = {
  name: "Seattle",
  phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
  minCustomer: 23,
  maxCustomer: 65,
  averageCookies: 6.3,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
  }
}

const tokyo = {
  name: "Tokyo",
  phoneNumbers: ["Main: 333-1212", "Fax: 333-6363"],
  minCustomer: 3,
  maxCustomer: 24,
  averageCookies: 1.2,
  estimatedSales: [],
  render: function() {
    renderStore(this);
  },
  estimate: function() {
    this.estimatedSales = estimate(this);
  }
}


function random(min,max) {
  return Math.floor( Math.random() * (max-min+1)) + min;
}


// return an array of estimated sales per hour
function estimate(store) {
  let estimatedSales = [];
  
  // loop over the hours array
  
  for( let i=0; i < hours.length; i++ ) {
    const numCustomers = random( store.minCustomer, store.maxCustomer);
    const hourlySales = Math.ceil(numCustomers * store.averageCookies);
    estimatedSales.push( hourlySales );
  }
  return estimatedSales;
}

function renderStore( store ) {

    
  const rootElement = document.getElementById("salesList");
   const storeSection = document.createElement("section");
  rootElement.appendChild(storeSection);

  const firstTitle = document.createElement("h2");
  firstTitle.textContent = store.name;
  storeSection.appendChild(firstTitle);

 
  const storeDataList = document.createElement("ul");
  storeSection.appendChild(storeDataList);

// calculate the estimate and puts it on a list
  let total = 0;
  for( let i=0; i < hours.length; i++ ) {
    total += store.estimatedSales[i];
    const est = document.createElement('li');
    
    est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
  
    storeDataList.appendChild(est);
  }

  const totalElement = document.createElement('li');
  totalElement.textContent = `Total: ${total}`;
  storeDataList.appendChild(totalElement);

}



seattle.estimate();
seattle.render();

tokyo.estimate();
tokyo.render();


 */