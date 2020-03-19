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

The page layout utilises the [Materialize](https://materializecss.com/) front end framework to create a responsive webpage. By using this framework we were able to fast-track creation of elements on the html and css design. The framework enables a full page and all of it's internal elements to respond to the size and format of the users screen when viewing the webpage.

The head of the document calls on the [Materialize](https://materializecss.com/) stylesheet, [Google material fonts](https://material.io/resources/icons/?style=baseline) and our own CSS stylesheet.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link href="assets/css/materialize.css" />
<link href="assets/css/styles.css" />
```

Individual changes in styling are controlled by the CSS stylesheet where required. For example the placement and color of the Page title;

```css
nav ul a,
nav .brand-logo {
  color: #ffffff;
  position: inherit;
}
```

The header of the page includes the site name and also a drop down box for the users currency preference controlled by Materialize classes utilised sitewide.

```css
.red .accent-4 .amber-text
```

```html
<nav class="nav-extended red accent-4">
  <div class="nav-wrapper row">
    <div class="col s5 right">
      <div class="input-field red accent-4 amber-text">
        <!-- code for the currency dropdown goes here -->
      </div>
    </div>
    <div class="col">
      <!-- code for the logo and title goes here -->
    </div>
  </div>
</nav>
```

Below there is the main body of the page that is broken down into three main elements. Each incorporates id's which are used to link to javascript functionality. These are;

- the search field within a form tag. The search field is where a user can input the recipe that they are wishing to find and is a simple text input field

```html
<form>
    <div class="input-field red accent-4 white-text">
        <input id="recipe-search-field"/>
        <label recipe-search-field">Enter a dish</label>
    </div>
</form>
```

- the returned recipe cards area,

```html
<div class="section">
  <div class="row" id="returned-recipes"></div>
</div>
```

- and the ingredients table.

```html
<table class="table">
  <thead>
    <tr>
      <th>
        Ingredients
      </th>
      <th>
        Quantity
      </th>
      <th>
        Price
      </th>
    </tr>
  </thead>
  <tbody id="ingredients-list"></tbody>
</table>
```

The footer includes a link to this Github repository and copyright information.

## Recipe lookup

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

### Dropdown component

The below code defines the dropdown component from the materialize css library.

The element must be contained inside an input field.

```html
<div class="input-field red accent-4 amber-text">
  ...
  <!-- code goes here -->
  ...
</div>
```

The input uses materialize classes to match the site theme.

```html
.red .accent-4 .amber-text
```

select tag is declared with nest

```html
<select data-exch-rate="">
  <option value="0" disabled selected> $</option>
  <option class="amber-text" value="AUD">AUD</option>
  <option value="USD">USD</option>
  <option value="GBP">GPB</option>
</select>
```

```js
function getExchRate() {
  const currencySelect = $("select");
  const selectSel = currencySelect.formSelect()[0];

  let currency = localStorage.getItem("currency");
  if (currency) {
    selectSel.value = currency;
  } else {
    currency = "AUD";
  }
  currencySelect.formSelect();
  url = "currency url";
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(resp) {
    let rate = Object.values(resp)[0];
    selectSel["data-exch-rate"] = rate;
  });
}
getExchRate();

currencySelect.on("change", function(e) {
  localStorage.setItem("currency", e.target.value);
  getExchRate();
});
```

## Contributors

### James Schreiber

- Website: https://jschrbr.github.io/
- Github: [@jschrbr](https://github.com/jschrbr)
- LinkedIn: [@techsmechs](https://linkedin.com/in/techsmechs)

### Name

- Website: https://{placeholder}.github.io/
- Github: [@{placholder}](https://github.com/{placholder})
- LinkedIn: [@{placholder}](https://linkedin.com/in/{placholder})

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
