function createEl(tag) {
  return $("<" + tag + ">");
}

const carouselSel = $("#recipes");

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

function cardBtn() {
  getConversionRate($(this)[0].id);
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
      if (resp.results.length > 0) {
        res = resp.results;
        carouselSel.text("");
        for (var i = 0; i < res.length; i++) {
          let card = createEl("div").addClass([
            "card",
            "small",
            "carousel-item"
          ]);
          let cardImage = createEl("div").addClass(["card-image"]);
          let cardTitle = createEl("span")
            .addClass(["card-title"])
            .text(res[i].title);
          let cardContent = createEl("div").addClass(["card-content"]);
          let img = $("<img>").attr({
            src: "https://spoonacular.com/recipeImages/" + res[i].imageUrls[0]
          });
          let buttonWrapper = createEl("a")
            .attr({ href: "javascript:", id: res[i].id })
            .append(img)
            .addClass("card-btn");

          let para = createEl("p");

          cardImage.append(buttonWrapper);
          cardContent.append(cardTitle, para);
          card.append(cardImage, cardContent);
          carouselSel.append(card);
        }
        $(".fixed-action-btn").floatingActionButton({
          toolbarEnabled: true
        });
        $(".carousel").carousel({
          fullWidth: true,
          indicators: true
        });
        $(".card-btn").click(cardBtn);

        getConversionRate(res[0].id);
      }
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
    $("input").val("");
    $("input")
      .next()
      .removeClass("active")
      .removeClass("valid");
    if ($(window).width() < 992) {
      $(".sidenav").sidenav("close");
    }
    getRecipes(query);
  }
}

$("form").submit(newQuery);
