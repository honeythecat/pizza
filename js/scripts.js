var Pizza = {

  size: function(newSize) {
    this.size = newSize;
  },
  flavor: function(newFlavor) {
    this.flavor = newFlavor;
  }
};

// var Slices = function(numberOfSlices) {
//   if (Pizza.flavor == cheese) {
//     unroundedCheeseSlices = Pizza.size / 2;
//     numberOfSlices = 2 * Math.round(unroundedCheeseSlices/2);
//     return (numberOfSlices);
//   } else {
//     numberOfSlices = Math.floor(Math.random()) * Pizza.slice;
//     return  (numberOfSlices);
//   }
// };






// ------------------------------------------

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();


    var inputtedFlavor = $("input#pizza-type").val();
    var inputtedSize = $("input#pizza-size").val();
    var newPizza = { size: inputtedSize, flavor: inputtedFlavor };


    $("h1.pizza-type").text(newPizza.flavor);
debugger;



    });

  });
