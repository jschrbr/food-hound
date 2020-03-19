<h1 align="center">Welcome to food-hound <img width="40px" src="./assets/images/material-hound.png">
</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-01.00-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jschrbr/food-hound" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> A simple single page application for looking up recipes. The application also has the option to convert the currency of the estimated prices.

### 🏠 [Homepage](https://github.com/jschrbr/food-hound)

### ✨ [Demo](https://jschrbr.github.io/food-hound/)

## Usage

```sh
How to use the app
```

## Page layout

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

```css
body {
  margin: 20px;
}
```

## Get recipe

### Lookup component

The code below defines the search bar from the materialize css library.

The element must be contained inside that input field.

```html
<div class="input-field red accent-4 white-text">
  <input id="recipe-search-field" type="text" class="white-text" />
</div>
```

Under the section class, materialize cards were utilised to show returned recipes when user inputs a search query.

```html
<div class="section">
  <div class="row" id="returned-recipes">
    <!-- code goes here -->
  </div>
</div>
```

The structure of the card builder includes an image, a floating button and a card title. In order for the recipe to render it's ingredients list a value was attribute to the button.

```js
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
```

### The call

```js
var queryURL = "recipeURL";
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
      }
```

### The listener

```js
$("form").submit(function(event) {
  event.preventDefault();
  var userInput = $("#recipe-search-field")
    .val()
    .trim();
  // return userInput
  buildQuery(userInput);
});
```

## Incredient lookup

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

```js
let one = 1;
console.log(one);
```

## Get exchange rate

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

```js
let one = 1;
console.log(one);
```

## Contributors

### James Schreiber

- Website: https://jschrbr.github.io/
- Github: [@jschrbr](https://github.com/jschrbr)
- LinkedIn: [@techsmechs](https://linkedin.com/in/techsmechs)

### Haylie Goh

- Website: https://dev-hg20.github.io/profile-hw/
- Github: [@{dev-hg20}](https://github.com/dev-hg20)
- LinkedIn: (https://www.linkedin.com/in/haylie-goh-941bb896/)

### Name

- Website: https://{placeholder}.github.io/
- Github: [@{placholder}](https://github.com/{placholder})
- LinkedIn: [@{placholder}](https://linkedin.com/in/{placholder})

### Name

- Website: https://{placeholder}.github.io/
- Github: [@{placholder}](https://github.com/{placholder})
- LinkedIn: [@{placholder}](https://linkedin.com/in/{placholder})

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jschrbr/food-hound/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/techsmechs">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
