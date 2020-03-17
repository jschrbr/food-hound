$(document).ready(function() {
  var recipeId;
  var recipeTitle;
  var recipeImage;
  const currencySelect = $("select");
  const selectSel = currencySelect.formSelect()[0];
  $(".sidenav").sidenav();

  function getExchRate() {
    let currency = localStorage.getItem("currency");
    if (currency) {
      currencySelect.formSelect()[0].value = currency;
    } else {
      currency = "AUD";
    }
    currencySelect.formSelect();
    url = `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=07b4e474a20765fec5ef`;
    $.ajax({
      url: url,
      method: "GET"
    }).then(function(resp) {
      let rate = resp[Object.keys(resp)];
      selectSel["data-exch-rate"] = rate;
      // console.log(currencySelect.formSelect()[0]["data-exch-rate"]);
    });
  }

  getExchRate();

  function buildQuery(userInput) {
    var queryURL =
      "https://api.spoonacular.com/recipes/search?query=" +
      userInput +
      "&number=4&apiKey=7fd63fa14b66441e9190b97a36f40c22";
    // var queryURL = "https://api.spoonacular.com/recipes/search?query=burger&apiKey=7fd63fa14b66441e9190b97a36f40c22"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      console.log(results);
      $("#returned-recipes").empty();

      for (index in results) {
        recipeId = results[index].id;
        recipeTitle = results[index].title;
        recipeImage =
          "https://spoonacular.com/recipeImages/" + results[index].imageUrls;
        console.log(recipeId);
        console.log(recipeImage);
        console.log(recipeTitle);

        cardBuilder(recipeId, recipeImage, recipeTitle);
      }
      $(".btn-floating").on("click", function() {
        console.log("Hello");
        console.log(this.id);
        getIngredients(this.id);
      });
    });
  }

  //this allows the user to search up a recipe
  function searchQuery() {
    $("#recipe-search-field").on("keyup", function(event) {
      if (event.keyCode == 13) {
        event.preventDefault();
        var userInput = $("#recipe-search-field")
          .val()
          .trim();
        // return userInput
        console.log(userInput);
        buildQuery(userInput);
      }
    });
  }

  //preventing enter button to submit globally
  $(window).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  searchQuery();

  function getIngredients(id) {
    //remember to put parameter of IngredientsID
    // var queryURL =
    //   "https://api.spoonacular.com/recipes/" +
    //   ingredientsID +
    //   "/priceBreakdownWidget.json?apiKey=92529c25799b421d90b3ef2443e71505";
    var queryURL =
      "https://api.spoonacular.com/recipes/" +
      id +
      "/priceBreakdownWidget.json?apiKey=92529c25799b421d90b3ef2443e71505";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.ingredients;
      console.log(results);

      for (index in results) {
        ingredient = results[index].name;
        console.log(ingredients);
        ingredientPrice = results[index].price;
        ingredientPrice = results[index].price / 100;
        console.log(pricing);
        ingredientsBuilder(ingredient, ingredientQuantity, ingredientPrice);
      }
    });
  }

  function ingredientsBuilder(ingredient, ingredientQuantity, ingredientPrice) {
    let ingredientResult = $("<tr>");
    let ingredient = $("<td>");
    ingredientResult.append(ingredient);
    let ingredientQuantity = $("<td>");
    ingredientResult.append(ingredientQuantity);
    let ingredientPrice = $("<td>");
    ingredientResult.append(ingredientPrice);
    $("ingredients-list").append(ingredientResult);
  }

  function cardBuilder() {
    let recipeCard = $("<div>");
    recipeCard.attr("class", "col s6 m3");
    let cardContainer = $("<div>");
    cardContainer.attr("class", "card");
    let cardImageContainer = $("<div>");
    cardImageContainer.attr("class", "card-image recipe-image");
    let cardImage = $("<img>");
    cardImage.attr("src", recipeImage);
    let cardButton = $("<a>");
    cardButton.attr(
      "class",
      "btn-floating halfway-fab waves-effect waves-light red"
    );
    cardButton.attr("id", recipeId);
    let cardIcon = $("<i>");
    cardIcon.attr("class", "material-icons");
    cardIcon.text("format_list_bulleted");
    let cardTitleContainer = $("<div>");
    cardTitleContainer.attr("class", "card-content flow-text");
    let cardTitle = $("<span>");
    cardTitle.attr("class", "card-title");
    cardTitle.text(recipeTitle);
    recipeCard.append(cardContainer);
    cardContainer.append(cardImageContainer);
    cardImageContainer.append(cardImage);
    cardImageContainer.append(cardButton);
    cardButton.append(cardIcon);
    cardContainer.append(cardTitleContainer);
    cardTitleContainer.append(cardTitle);
    $("#returned-recipes").append(recipeCard);
  }
  currencySelect.on("change", function(e) {
    localStorage.setItem("currency", e.target.value);
    getExchRate();
  });
});
