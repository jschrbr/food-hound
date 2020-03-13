function createEl(tag) {
  return $("<" + tag + ">");
}

const carouselSel = $("#recipes");

function getIngredients(id, rate) {
  queryURL =
    "https://api.spoonacular.com/recipes/" +
    id +
    "/priceBreakdownWidget.json?apiKey=a6e7c38ff34b4abfaef92a07685d0635";
  console.log(rate);
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(resp) {
      console.log(resp.ingredients);
      res = resp.ingredients;
      $("tbody").text("");
      res.forEach(ingrd => {
        console.log(ingrd.name);
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

function getConversionRate() {
  url =
    "https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=07b4e474a20765fec5ef";
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(resp) {
    let rate = resp[Object.keys(resp)];
    getIngredients(res[0].id, rate);
  });
}

function getRecipes(query) {
  $.ajax({
    url:
      "https://api.spoonacular.com/recipes/search?query=" +
      query +
      "&apiKey=a6e7c38ff34b4abfaef92a07685d0635",
    method: "GET"
  })
    .then(function(resp) {
      res = resp.results;
      carouselSel.text("");
      for (var i = 0; i < res.length; i++) {
        // let panelEl = createEl("div").addClass(["carousel-item"]);

        let card = createEl("div").addClass(["card", "small", "carousel-item"]);
        let cardImage = createEl("div").addClass(["card-image"]);
        let cardTitle = createEl("span")
          .addClass(["card-title"])
          .text(res[i].title);
        let cardContent = createEl("div").addClass(["card-content"]);
        let img = $("<img>").attr({
          src: "https://spoonacular.com/recipeImages/" + res[i].imageUrls[0]
        });

        let para = createEl("p").text("Hello");

        cardImage.append(img);
        cardContent.append(cardTitle, para);
        card.append(cardImage, cardContent);
        carouselSel.append(card);
      }

      $(".carousel").carousel({
        fullWidth: true,
        indicators: true
      });
      getConversionRate();
    })
    .fail(function(resp) {
      console.log(resp);
    });
}

$(document).ready(function() {
  let query = "Mashed Potatoes";
  $(".sidenav").sidenav();
  getRecipes(query);
});

function newQuery(e) {
  e.preventDefault();

  let query = $("input").val();
  if (query !== "") {
    getRecipes(query);
  }
}

$("form").submit(newQuery);
