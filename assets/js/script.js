$(document).ready(function() {
  var recipeId;
  var recipeTitle;
  var recipeImage;
  const currencySelect = $("select");
  const selectSel = currencySelect.formSelect()[0];

  function getExchRate() {
    let currency = localStorage.getItem("currency");
    if (currency) {
      selectSel.value = currency;
    } else {
      currency = "AUD";
    }
    currencySelect.formSelect();
    url = `https://free.currconv.com/api/v7/convert?q=USD_${currency}&compact=ultra&apiKey=8b8792dc7786b5293e29`;
    $.ajax({
      url: url,
      method: "GET"
    }).then(function(resp) {
      let rate = resp[Object.keys(resp)];
      selectSel["data-exch-rate"] = rate;
    });
  }

  getExchRate();

  function buildQuery(userInput) {
    var queryURL =
      "https://api.spoonacular.com/recipes/search?query=" +
      userInput +
      "&number=4&apiKey=7fd63fa14b66441e9190b97a36f40c22";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.results;
      $("#returned-recipes").empty();

      for (index in results) {
        recipeId = results[index].id;
        recipeTitle = results[index].title;
        recipeImage =
          "https://spoonacular.com/recipeImages/" + results[index].imageUrls;
        cardBuilder(recipeId, recipeImage, recipeTitle);
      }

      $(".btn-floating").on("click", function() {
        getIngredients(this.id);
        $(".ingredients-list").empty();
      });
    });
  }

  function getIngredients(id) {
    var queryURL =
      "https://api.spoonacular.com/recipes/" +
      id +
      "/priceBreakdownWidget.json?apiKey=92529c25799b421d90b3ef2443e71505";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.ingredients;

      for (index in results) {
        ingredient = results[index].name;
        ingredientPrice = results[index].price;
        ingredientPrice = (
          (selectSel["data-exch-rate"] * results[index].price) /
          100
        ).toFixed(2);
        ingredientQuantity =
          results[index].amount.metric.value +
          " " +
          results[index].amount.metric.unit;
        ingredientsBuilder(ingredient, ingredientQuantity, ingredientPrice);
      }
    });
  }

  function ingredientsBuilder(ingredient, ingredientQuantity, ingredientPrice) {
    let ingredientResult = $("<tr>");
    let ingredientList = $("<td>").text(ingredient);
    ingredientResult.append(ingredientList);
    let ingredientQuantityList = $("<td>").text(ingredientQuantity);
    ingredientResult.append(ingredientQuantityList);
    let ingredientPriceList = $("<td>").text(ingredientPrice);
    ingredientResult.append(ingredientPriceList);
    $(".ingredients-list").append(ingredientResult);
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
  //this allows the user to search up a recipe
  $("#recipe-search-field").on("keyup", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      var userInput = $("#recipe-search-field")
        .val()
        .trim();
      // return userInput
      buildQuery(userInput);
    }
  });
  //preventing enter button to submit globally
  $(window).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
