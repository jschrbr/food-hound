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

> The below image demonstrates the application functionality: <img alt="interface" src= assets/images/user-interface.PNG width= 100%/>

> User can also choose a currency of their choice <img alt="currency" src= assets/images/currency-converter-dropdowm.PNG width= 100% />

> User will enter a recipe of their choice, in this case "burgers" <img alt="search" src= assets/images/search-recipe-functionality.PNG width= 100%/>

> Once the user presses ENTER, it will call the API and render the ingredients list.<img alt="button" src= assets/images/button-for-ingredients.PNG width= 100%/>

## Stack choices

### API

> - Settled on spoonacular hoped for woolworths or equiv for product info.
> - No store api, currency converter used to convert spoonacular prices.

### Additional contraints

> - Free APIs are generaly limited
> - Front end application meant using a subscription API would be expensive/complex/un-safe.

### CSS framework

#### Materialize CSS

> - Responsive elements
> - Material design

## Challenges

> - Selecting the apis
> - Writing the code
> - styling the site
> - Collaborating and Git
> - Using a new css framework
> - Keeping design responsive and consistent

## Roadmap

> - Update ingrdient price on currency select
> - Search recipes by ingredient list
> - Add serving size and cooking time to cards
> - Search by cuisine
> - Increase currency list
> - Set currency default to geo-location
> - Add recipe tool

# Review

## Page layout

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Food Hound</title>
  </head>

  <body>
    <nav></nav>
    <!-- main content search and results -->
    <main class="container">
      <!-- search container -->
      <div class="search container"></div>
      <!-- recipes -->
      <div class="recipes"></div>
      <!-- table -->
      <table class="ingredients-table"></table>
    </main>

    <footer class="page-footer red accent-4"></footer>
  </body>
</html>
```

> The page layout utilises the [Materialize](https://materializecss.com/) front end framework to create a responsive webpage. By using this framework we were able to fast-track creation of elements on the html and css design. The framework enables a full page and all of it's internal elements to respond to the size and format of the users screen when viewing the webpage. The head of the document calls on the [Materialize](https://materializecss.com/) stylesheet, [Google material fonts](https://material.io/resources/icons/?style=baseline) and our own CSS stylesheet. Individual changes in styling are controlled by the CSS stylesheet where required. For example the placement and color of the Page title; The header of the page includes the site name and also a drop down box for the users currency preference controlled by Materialize classes utilised sitewide. Below there is the main body of the page that is broken down into three main elements. Each incorporates id's which are used to link to javascript functionality. These are;

> - the search field within a form tag. The search field is where a user can input the recipe that they are wishing to find and is a simple text input field
> - the returned recipe cards area
> - and the ingredients table.
> - The footer includes a link to this Github.

## Get Recipe

### Javascript

```js
function cardBuilder(content) {
  // build materialize card with jquery functions
  // fills card content with query response
  // renders cards on page
}

function buildQuery() {
  // get form input
  // query the api
  // Loop through results and send content to cardbuilder
  cardBuilder(content);
}

// Form submit event listener
$("form").submit(buildQuery);
```

> The code below defines the search bar from the materialize css library. The element must be contained inside that input field. Under the section class, materialize cards were utilised to show returned recipes when user inputs a search query. The structure of the card builder includes an image, a floating button and a card title. In order for the recipe to render it's ingredients list a value was attribute to the button. The url query string is built get the ID, title and image, it is used in the below code. We also set up a listener to monitor the change when user hits ENTER.

## Ingredient lookup

### Javascript

```js
function ingredientsBuilder(content) {
  // build materialize card with jquery functions
  // fills card content with query response
  // renders cards on page
}

function getIngredients() {
  // get form input
  // query the api
  // Loop through results and send content to cardbuilder
  ingredientsBuilder(content);
}

function cardBuilder(content) {
  $(".btn-floating").on("click", getIngredients);
}
```

> The code below defines the search url using the recipe ID that is stored in the recipe card button value. The structure of the ingredients is a row within a table and is built within the ingredientsBuilder function and appended to the html. The url query that was built with the recipe ID is used to make the AJAX call The listener for the ingredients call is built within the buildQuery function so that once a recipe card is created the button on it is being listened to. The response needs to be rendered to the page using the JQuery link to the html ID "ingredients-list"

## Get exchange rate

### HTML

```html
<div class="input-field">
  <select>
    <option value="0">...</option>
    ... ... ...
  </select>
</div>
```

> The below code defines the dropdown component from the materialize css library. The element must be contained inside an input field.

### Javascript

```js
const currencySelect = $("select");

function getExchRate() {
  // Get selection from local storage
  // Validate for initial use
  // make api call
  // save rate to html attribute
}

getExchRate();

function getIngredients() {
  // grab rate from html
  // rate * ingredientPrice;
}

currencySelect.on("change", function() {
  // save selection to
  getExchRate();
});
```

> select tag is declared with nest options, each option holds a value used when querying https://free.currencyconverterapi.com/. First we define some constants used throughout the code. Then we define the function then call it immediately. The code intially ensures there is a currency value for the api call. It does so by checking the `localStorage` for a previously selected option, otherwise assigning a default value `"AUD"`. The below jquery function renders the dropdown element, incase a value was retrieved from local storage The url query string is built with the validated currency, and used in the below code. The exchange rate is then set to an attribute named `"data-exch-rate"` Finally we setup a listener, to monitor for a change in the dropdown selection. The selection is saved to local storage, and the `getExchRate()` function is called. Where the selection is retrieved from local stroage.

## Contributors

### James Schreiber

- Website: https://jschrbr.github.io/
- Github: [@jschrbr](https://github.com/jschrbr)
- LinkedIn: [@techsmechs](https://linkedin.com/in/techsmechs)

### Haylie Goh

- Website: https://dev-hg20.github.io/profile-hw/
- Github: [@dev-hg20](https://github.com/dev-hg20)
- LinkedIn: (https://www.linkedin.com/in/haylie-goh-941bb896/)

### Name

- Website: https://{placeholder}.github.io/
- Github: [@{placholder}](https://github.com/{placholder})
- LinkedIn: [@{placholder}](https://linkedin.com/in/{placholder})

### DC Cunningham

- Website: https://DCRevResLabs.github.io/
- Github: [@DCRevResLabs](https://github.com/DCRevResLabs)
- LinkedIn: [@DC-Cunningham](https://www.linkedin.com/in/DC-Cunningham)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jschrbr/food-hound/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/techsmechs">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
