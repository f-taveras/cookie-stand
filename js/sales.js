

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


