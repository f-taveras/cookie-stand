const locations = [
    {
      mincustomer: 23,
      maxcustomer: 65,
      avg: 6.3,
      name: 'Seattle',
      hoursOpen: '6am - 7pm',
      contactInfo: '123-456-7890',
      location: '2901 3rd Ave #300, Seattle, WA 98121'
    },
    {
      mincustomer: 23,
      maxcustomer: 65,
      avg: 1.2,
      name: 'Tokyo',
      hoursOpen: '6am - 7pm',
      contactInfo: '222-222-2222',
      location: '1 Chome-1-2 Oshieage, Sumida City, Tokyo 131-8634'
    },
    {
      mincustomer: "0",
      maxcustomer: 65,
      avg: 1.2,
      name: 'Dubai',
      hoursOpen: '6am - 7pm',
      contactInfo: '333-333-3333',
      location: '1 Sheikh Mohammed bin Rashid Blvd - Dubai'
    },
    {
      mincustomer: 23,
      maxcustomer: 65,
      avg: 1.2,
      name: 'Paris',
      hoursOpen: '6am - 7pm',
      contactInfo: '444-444-4444',
      location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris'
    },
    {
      mincustomer: 23,
      maxcustomer: 65,
      avg: 1.2,
      name: 'Lima',
      hoursOpen: '6am - 7pm',
      contactInfo: '555-555-5555',
      location: 'Ca. Gral. Borgoño cuadra 8, Miraflores 15074'
    }
  ];
  
  function displayLocations(locationArray) {
    const locationList = document.getElementById("locationList");
  
    locationArray.forEach(location => {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${location.name}, Hours: ${location.hoursOpen}, Contact: ${location.contactInfo}, Location: ${location.location}`;
      locationList.appendChild(listItem);
    });
  }
  
  displayLocations(locations);
  
  










// const seattleLocation = {
    
//     mincustomer: 23,
//     maxcustomer: 65,
//     avg: 6.3,
//     name: 'Seattle',
//     hoursOpen: '6am - 7pm',
//     contactInfo: '123-456-7890',
//     location: '2901 3rd Ave #300, Seattle, WA 98121'
// }

// const tokyoLocation = {
    
//     mincustomer: 23,
//     maxcustomer: 65,
//     avg: 1.2,
//     name: 'Tokyo',
//     hoursOpen: '6am - 7pm',
//     contactInfo: '222-222-2222',
//     location: '1 Chome-1-2 Oshieage, Sumida City, Tokyo 131-8634'
// }

//  const dubaiLocation ={
//     mincustomer: "0",
//     maxcustomer: 65,
//     avg: 1.2,
//     name: 'Dubai',
//     hoursOpen: '6am - 7pm',
//     contactInfo: '333-333-3333',
//     location: '1 Sheikh Mohammed bin Rashid Blvd - Dubai'
// }

//  const arisLocation = {
//     mincustomer: 23,
//     maxcustomer: 65,
//     avg: 1.2,
//     name: 'Paris',
//     hoursOpen: '6am - 7pm',
//     contactInfo: '444-444-4444',
//     location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris'
// }

// const limaLocation ={
//     mincustomer: 23,
//     maxcustomer: 65,
//     avg: 1.2,
//     name: 'Lima',
//     hoursOpen: '6am - 7pm',
//     contactInfo: '555-555-5555',
//     location: 'Ca. Gral. Borgoño cuadra 8, Miraflores 15074'
// }




// function seattleInfo(locationObject) {
//     const targetDiv = document.getElementById("seattle");
    
//     targetDiv.textContent = `Name: ${seattleLocation.name}, Hours: ${seattleLocation.hoursOpen}, Location: ${seattleLocation.location}`;
    
//     targetDiv.appendChild(targetDiv);
//   }
  
// //   function displayLocationInfo(locationObject) {
// //     const targetDiv = document.getElementById("tokyo");
    
// //     targetDiv.textContent = `Name: ${seattleLocation.name}, Hours: ${seattleLocation.hoursOpen}, Location: ${seattleLocation.location}`;
// //     targetDiv.appendChild(targetDiv);
// //   }




// seattleInfo(seattleLocation);














// // function customerTraffic(min, max) {
// //     return Math.floor(Math.random() * (max - min) + min);
// //   }
  
// //   const randomNumber = customerTraffic(10, 20);
// //   console.log(randomNumber);


// //  const hours = ["6am:", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
// // const hourList = document.getElementById("seattle")
// // function generateList(content, parent) {
// //     const createList = document.createElement('li');
// //     createList.textContent = content;
// //     parent.appendChild(createList);
// //   }








// // function cookieSales() {
// //     // Look Up Math.random on MDN
// //     const max = tokyo.mincustomer;
// //     const min = tokyo.maxcustomer;
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// // }
// // console.log()
