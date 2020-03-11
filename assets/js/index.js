let queryWooliesURL =
  "https://api.spoonacular.com/recipes/search?query=Mashed potatoes&apiKey=a6e7c38ff34b4abfaef92a07685d0635";

function createEl(tag) {
  return $("<" + tag + ">");
}

const carouselSel = $("#recipes");

$(document).ready(function() {
  $(".sidenav").sidenav();
  $.ajax({
    url: queryWooliesURL,
    method: "GET"
  })
    .then(function(resp) {
      console.log(resp.results);
      res = resp.results;
      carouselSel.text("");
      for (var i = 0; i < res.length; i++) {
        let panelEl = createEl("div").addClass(["carousel-item"]);

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
    })
    .fail(function(resp) {
      console.log(resp);
    });
});
