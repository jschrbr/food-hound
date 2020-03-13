const recipeCards = $("#recipes");
const ingredientsTitle = $("#ingredientsTitle");
const ingredientsCard = $("#ingredientsCard");
function createEl(tag) {
  return $(`<${tag}>`);
}

function buildQuery(query) {
  var queryURL = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=7fd63fa14b66441e9190b97a36f40c22`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    recipeCards.text("");
    var results = response.results;
    results.forEach(result => {
      let recipeID = result.recipeID;
      let imgUrl = `https://spoonacular.com/recipeImages/${result.image}`;
      let col = createEl("div").addClass("col s12 m5 l3");
      let card = createEl("div").addClass("card small");
      let buttonWrapper = createEl("a")
        .attr({
          href: "javascript:;",
          id: recipeID
        })
        .addClass("card-btn");
      var imgEl = $("<img>").attr({ src: imgUrl });
      buttonWrapper.append(imgEl);
      let cardImg = createEl("div")
        .addClass("card-image")
        .append(buttonWrapper);
      let cardContent = createEl("div").addClass("card-content");
      var cardTitle = createEl("span")
        .text(result.title)
        .addClass("card-title");
      card.append(cardImg, cardTitle, cardContent);
      col.append(card);
      recipeCards.append(col);
    });
  });
}

// buildQuery("mash");

function queryRecipe(e) {
  e.preventDefault();
  query = $("#search").val();
  if (query !== "") {
    buildQuery(query);
  }
}

function queryIngredients() {
  console.log($(this).firstChild);
}

ingredientsCard.hide();
$("form").submit(queryRecipe);
$(".card-btn").click(queryIngredients);
