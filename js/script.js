'use strict';

const seattle = {
  hours: "6am - 7pm",
  name: "Seattle",
  contactInfo: "316-555-1212",
  location: "2901 3rd Ave #300, Seattle, WA 96121",
  render: function () {
    const rootElement = document.getElementById("storeList");
    const storeSection = document.createElement("section");
    storeSection.classList.add("location");
    rootElement.appendChild(storeSection);

    const title = document.createElement("h2");
    title.textContent = this.name;
    storeSection.appendChild(title);

    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);


    // create a list item for the hours
    const storeHours = document.createElement('li');
    storeHours.textContent = `Hours Open: ${this.hours}`;
    storeDataList.appendChild(storeHours)

    // Create a list item for the location
    const storeAddress = document.createElement("li");
    storeAddress.textContent = `Location: ${this.location}`;
    storeDataList.appendChild(storeAddress);

    // Create a list item for the contactInfo
    const phoneItem = document.createElement('li');
    phoneItem.textContent = `Contact Info: ${this.contactInfo}`;
    storeDataList.appendChild(phoneItem);


  }
}



const tokyo = {
  hours: "6am - 7am",
  name: "Tokyo",
  contactInfo: "222-333-1212",
  location: "1 Chome-1-2 Oshiaga, Sumida City, Tokyo 131-8634",
  render: function () {
    const rootElement = document.getElementById("storeList");
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const title = document.createElement("h2");
    title.textContent = this.name;
    storeSection.appendChild(title);

    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);
    // create a list item for the hours
    const storeHours = document.createElement('li');
    storeHours.textContent = `Hours Open: ${this.hours}`;
    storeDataList.appendChild(storeHours)

    // Create a list item for the location
    const storeAddress = document.createElement("li");
    storeAddress.textContent = `Location: ${this.location}`;
    storeDataList.appendChild(storeAddress);

    // Create a list item for the contactInfo
    const phoneItem = document.createElement('li');
    phoneItem.textContent = `Contact Info: ${this.contactInfo}`;
    storeDataList.appendChild(phoneItem);

  }
}

const dubai = {
  hours: "6am - 7am",
  name: "Dubai",
  contactInfo: "333-333-3333",
  location: "1 Sheikh Mohammed bin Rashid Blvd - Dubai",
  render: function () {
    const rootElement = document.getElementById("storeList");
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const title = document.createElement("h2");
    title.textContent = this.name;
    storeSection.appendChild(title);

    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);
    // create a list item for the hours
    const storeHours = document.createElement('li');
    storeHours.textContent = `Hours Open: ${this.hours}`;
    storeDataList.appendChild(storeHours)

    // Create a list item for the location
    const storeAddress = document.createElement("li");
    storeAddress.textContent = `Location: ${this.location}`;
    storeDataList.appendChild(storeAddress);

    // Create a list item for the contactInfo
    const phoneItem = document.createElement('li');
    phoneItem.textContent = `Contact Info: ${this.contactInfo}`;
    storeDataList.appendChild(phoneItem);



  }
}

const paris = {
  hours: "6am - 7am",
  name: "Paris",
  contactInfo: "444-444-4444",
  location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",
  render: function () {
    const rootElement = document.getElementById("storeList");
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const title = document.createElement("h2");
    title.textContent = this.name;
    storeSection.appendChild(title);

    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);
    // create a list item for the hours
    const storeHours = document.createElement('li');
    storeHours.textContent = `Hours Open: ${this.hours}`;
    storeDataList.appendChild(storeHours)

    // Create a list item for the location
    const storeAddress = document.createElement("li");
    storeAddress.textContent = `Location: ${this.location}`;
    storeDataList.appendChild(storeAddress);

    // Create a list item for the contactInfo
    const phoneItem = document.createElement('li');
    phoneItem.textContent = `Contact Info: ${this.contactInfo}`;
    storeDataList.appendChild(phoneItem);



  }
}
const lima = {
  hours: "6am - 7am",
  name: "Lima",
  contactInfo: "555-555-5555",
  location: "1 Sheikh Mohammed bin Rashid Blvd - Dubai",
  render: function () {
    const rootElement = document.getElementById("storeList");
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);

    const title = document.createElement("h2");
    title.textContent = this.name;
    storeSection.appendChild(title);

    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);
    // create a list item for the hours
    const storeHours = document.createElement('li');
    storeHours.textContent = `Hours Open: ${this.hours}`;
    storeDataList.appendChild(storeHours)

    // Create a list item for the location
    const storeAddress = document.createElement("li");
    storeAddress.textContent = `Location: ${this.location}`;
    storeDataList.appendChild(storeAddress);

    // Create a list item for the contactInfo
    const phoneItem = document.createElement('li');
    phoneItem.textContent = `Contact Info: ${this.contactInfo}`;
    storeDataList.appendChild(phoneItem);
  }
}

// Call the render function for each store
seattle.render();
tokyo.render();
dubai.render();
dubai.render();
lima.render()