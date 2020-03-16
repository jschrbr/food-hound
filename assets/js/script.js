$(document).ready(function() {
  const recipeCards = $("#recipes");
  const ingredientsTitle = $("#ingredientsTitle");
  const ingredientsCard = $("#ingredientsCard");
  const preloadEl = $(".preloader-wrapper");
  const currencySelect = $("select");
  const selectSel = currencySelect.formSelect()[0];

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
    })
      .then(function(resp) {
        console.log(resp);
        let rate = resp[Object.keys(resp)];
        selectSel["data-exch-rate"] = rate;
      })
      .fail((selectSel["data-exch-rate"] = 1));
  }

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

  function getIngredients(resp) {
    rate = parseInt(currencySelect.formSelect()[0]["data-exch-rate"]);

    ingredientsCard.show();
    preloadEl.hide();
    res = resp.ingredients;
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
  }

  function queryIngredients() {
    preloadEl.show();
    ingredientsCard.hide();
    $("tbody").text("");
    query =
      "https://api.spoonacular.com/recipes/" +
      $(this)[0].id +
      "/priceBreakdownWidget.json?apiKey=a6e7c38ff34b4abfaef92a07685d0635";
    queryAPI(query, getIngredients);
  }

  function renderCards(response) {
    preloadEl.hide();

    var results = response.results;
    results.forEach(result => {
      let recipeID = result.id;
      let imgUrl = `https://spoonacular.com/recipeImages/${result.image}`;
      let col = createEl("div").addClass("col s12 m5 l3");
      let card = createEl("div").addClass("card small amber");
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
      let cardContent = createEl("div").addClass("card-content amber");
      var cardTitle = createEl("span")
        .text(result.title)
        .addClass("card-title");
      cardContent.append(cardTitle);
      card.append(cardImg, cardContent);
      col.append(card);
      recipeCards.append(col);
    });
    $(".card-btn").click(queryIngredients);
  }

  function queryRecipe(e) {
    e.preventDefault();
    query = $("#search").val();
    if (query !== "") {
      ingredientsCard.hide();
      preloadEl.show();

      recipeCards.text("");

      var query = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=7fd63fa14b66441e9190b97a36f40c22`;
      queryAPI(query, renderCards);
    }
  }

  getExchRate();
  preloadEl.hide();
  ingredientsCard.hide();
  $("form").submit(queryRecipe);
  currencySelect.on("change", function(e) {
    localStorage.setItem("currency", e.target.value);
    getExchRate();
  });
});
