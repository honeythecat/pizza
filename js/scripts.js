var Pizza = {

  size: function(newSize) {
    this.size = newSize;
  },
  flavor: function(newFlavor) {
    this.flavor = newFlavor;
  }
};


// ------------------------------------------

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedFlavor = $("input#pizza-type").val();
    var inputtedSize = $("input#pizza-size").val();
    var newPizza = { size: inputtedSize, flavor: inputtedFlavor };

    $(".pizza-type").text(newPizza.flavor);

    if (newPizza.flavor == "CHEESE") {
      unroundedCheeseSlices = newPizza.size / 2;
      numberOfCheeseSlices = 2 * Math.round(unroundedCheeseSlices/2);
      numberOfSlices = numberOfCheeseSlices;
    } else if (newPizza.flavor == "PEPPERONI") {
      numberOfSlices = Math.floor(Math.random() * 100) || 0;
    } else {
      alert ("WE ONLY MAKE PEPPERONI AND CHEESE AND ONLY IF IT'S TYPED IN CAPS LOCK! YOU GET NO PIZZA!!!!");
    };

    $(".slice-number").text(numberOfSlices);
  });
});
