describe("Pizza", function() {
  describe("size", function() {
    it("will allow the user to enter the size of a pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size(12);
      expect(testPizza.size).to.equal(12);
    });
  });

  describe("flavor", function() {
    it("will allow the user to choose a flavor of pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.flavor("cheese");
      expect(testPizza.flavor).to.equal("cheese");
    });
  });
});
