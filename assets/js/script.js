const recipeCards = $("#recipes");
const ingredientsTitle = $("#ingredientsTitle");
const ingredientsCard = $("#ingredientsCard");

function createEl(tag) {
  return $(`<${tag}>`);
}

function queryAPI(query, callback) {
  $.ajax({
    url: query,
    method: "GET"
  }).then(function(response) {
    callback(response);
  });
}

function getIngredients(id, rate) {
  queryURL =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/priceBreakdownWidget.json?apiKey=a6e7c38ff34b4abfaef92a07685d0635";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(resp) {
      ingredientsCard.show();

      res = resp.ingredients;
      $("tbody").text("");
      res.forEach(ingrd => {
        let tr = createEl("tr");
        let tdName = createEl("td").text(ingrd.name);
        let tdQty = createEl("td").text(
          `${ingrd.amount.metric.value} ${ingrd.amount.metric.unit}`
        );
        let tdPrice = createEl("td").text(
          `$${((ingrd.price * rate) / 100).toFixed(2)}`
        );
        tr.append(tdName, tdQty, tdPrice);
        $("tbody").append(tr);
      });
    })
    .fail(function(resp) {
      console.log(resp);
    });
}

function getConversionRate(id) {
  url =
    "https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=07b4e474a20765fec5ef";
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(resp) {
    let rate = resp[Object.keys(resp)];
    getIngredients(id, rate);
  });
}

function renderCards(response) {
  recipeCards.text("");
  var results = response.results;
  results.forEach(result => {
    let recipeID = result.id;
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
  $(".card-btn").click(queryIngredients);
}

function queryRecipe(e) {
  e.preventDefault();
  query = $("#search").val();
  if (query !== "") {
    var query = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=7fd63fa14b66441e9190b97a36f40c22`;
    queryAPI(query, renderCards);
  }
}

function queryIngredients() {
  getConversionRate($(this)[0].id);
}

ingredientsCard.hide();

$("form").submit(queryRecipe);
