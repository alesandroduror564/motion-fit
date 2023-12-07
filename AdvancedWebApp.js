/* Filename: AdvancedWebApp.js
   Description: An advanced web application that uses various JavaScript concepts like modules, closures, async/await, and event listeners.
*/

// Module pattern to encapsulate the code
var AdvancedWebApp = (function () {
  // Private variables
  var counter = 0;
  var data = [];

  // Private functions
  function getDataFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve("Data retrieved successfully");
        } else {
          reject("Failed to retrieve data");
        }
      }, 2000);
    });
  }

  // Public API
  return {
    // Public function to initialize the web app
    init: async function () {
      try {
        // Fetch data from the server
        var result = await getDataFromServer();
        console.log(result);

        // Load additional resources
        await this.loadResources();

        // Attach event listeners
        await this.attachEventListeners();
      } catch (error) {
        console.error(error);
      }
    },

    // Public function to load resources
    loadResources: function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate resource loading
          console.log("Resources loaded");
          resolve();
        }, 1500);
      });
    },

    // Public function to attach event listeners
    attachEventListeners: function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate event listener attachment
          console.log("Event listeners attached");
          resolve();
        }, 1000);
      });
    },

    // Public function to increment the counter
    incrementCounter: function () {
      counter++;
      console.log("Counter incremented: " + counter);
    },

    // Public function to add data
    addData: function (item) {
      data.push(item);
      console.log("Data added: " + item);
    },

    // Public function to retrieve the data
    getData: function () {
      return data;
    },
  };
})();

// Initialize the web app
AdvancedWebApp.init();

// Perform some actions
AdvancedWebApp.incrementCounter();
AdvancedWebApp.addData("Item 1");
AdvancedWebApp.addData("Item 2");
console.log(AdvancedWebApp.getData());