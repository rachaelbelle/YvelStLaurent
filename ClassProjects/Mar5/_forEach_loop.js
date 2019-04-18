    // This line of JavaScript "grabs" the main div on the page ("#drink-options");
    var drinkDiv = document.getElementById("drink-options");

    // We then use .forEach() to iterate through all the drinks in drinkList.
    // With each iteration, we perform a series of code operations each time.
    drinkList.forEach(function(drink) {

      // For each drink in the array, we create a new paragraph to hold that text.
      // A new paragraph will be created with each iteration of the loop.
      var newDrinkP = document.createElement("p");

      // We then assign the the text of this paragraph to be the text in the array item.
      newDrinkP.textContent = drink;

      // We then add the paragraph to the our main div on the page ("#drink-options")
      drinkDiv.appendChild(newDrinkP);
    });