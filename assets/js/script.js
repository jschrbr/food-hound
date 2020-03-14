function buildQuery(userInput) {
  var queryURL =
    "https://api.spoonacular.com/recipes/search?query=" +
    userInput +
    "&apiKey=7fd63fa14b66441e9190b97a36f40c22";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.results;
    console.log(results);

    for (index in results) {
      var text_content = "Title: " + results[index].title;
      var text = document.createTextNode(text_content);
      var tag_element = $("<div>");
      tag_element.append(text);
      var body = $("body");
      console.log(index);

      var image_element = $("<img>").attr(
        "src",
        "https://spoonacular.com/recipeImages/" + results[index].imageUrls
      );
      // console.log(results[index].imageUrls);
      body.append(image_element);
    }
  });
}

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
$(document).ready(function() {
  $(window).keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

searchQuery();

function cardBuilder() {
  let recipeCard = $("<div>");
  recipeCard.attr("class", "col s6 m3");
  let cardContainer = $("<div>");
  cardContainer.attr("class", "card");
  let cardImageContainer = $("<div>");
  cardImageContainer.attr("class", "card-image recipe-image");
  let cardImage = $("<img>");
  cardImage.attr("src", "https://spoonacular.com/recipeImages/" + recipeImage);
  let cardButton = $("<a>");
  cardButton.attr(
    "class",
    "btn-floating halfway-fab waves-effect waves-light red"
  );
  cardButton.attr("value", recipeId);
  let cardIcon = $("<i>");
  cardIcon.attr("class", "material-icons");
  let cardTitleContainer = $("<div>");
  cardTitleContainer.attr("class", "card-content flow-text");
  let cardTitle = $("<span");
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
