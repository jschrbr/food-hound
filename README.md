<h1 align="center">Welcome to food-hound <img width="40px" src="./assets/images/material-hound.png">
</h1>
<h1>
  <img alt="Version" src="https://img.shields.io/badge/version-01.00-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jschrbr/food-hound/wiki" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</h1>

> # TOC
>
> - [Description](#description)
> - [Usage](#usage)
> - [Stack choices](#stack-choices)
>   - [Third party APIs](#third-party-apis)
>     - [Spoonacular API](#spoonacular-api)
>     - [Free Currency Converter API](#free-currency-converter-api)
>   - [CSS framework](#css-framework)
>     - [Materialize CSS](#materialize-css)
> - [Challenges](#challenges)
>   - [API constraints](#api-constraints)
>   - [Collaborative work](#collaborative-work)
>   - [Learning new concepts](#learning-new-concepts)
> - [🚧 Roadmap](https://github.com/jschrbr/food-hound/wiki/Roadmap)
> - [🙌 Contributors](#---contributors)
> - [🤝 Contributing](#---contributing)
>   - [🔧 Code abstract](https://github.com/jschrbr/food-hound/wiki/Code-Structure)
> - [Show your support](#show-your-support)

## 🏠 [Homepage](https://github.com/jschrbr/food-hound)

## ✨ [Demo](https://jschrbr.github.io/food-hound/)

## Description

> A simple single page application for looking up recipes. The application also has the option to convert the currency of the estimated prices.

> The below image demonstrates the application functionality:

> User can also choose a currency of their choice

> User will enter a recipe of their choice, in this case "burgers"

> Once the user presses ENTER, it will call the API and render the ingredients list.

## Usage

> Basic usage:

<div align="center">
<img alt="interface" src= "assets/images/Food Hound.gif" width= 60%/>
</div>

> Mobile view:

<div align="center">
<img alt="interface" src= "assets/images/Food Hound mobile.gif" />
</div>

<!-- <img alt="interface" src= assets/images/user-interface.PNG width= 100%/> -->

<!-- <img alt="currency" src= assets/images/currency-converter-dropdowm.PNG width= 100% /> -->

<!-- <img alt="search" src= assets/images/search-recipe-functionality.PNG width= 100%/> -->

<!-- <img alt="button" src= assets/images/button-for-ingredients.PNG width= 100%/> -->

## Stack choices

### Third party APIs

> The initial aim of the project was to select two 3rd party APIs, and use data from one reponse to query the second API. To keep momentum in the project the group settled on using the [Spoonacular API](https://spoonacular.com/food-api) and promised to find another API to meet the oiginal aim.

> We hoped to tie the spoonacular data to the woolworths API, but were unaware of how realistic that would be. With the initial aim seeming unlikely given what free APIs have to offer, [the free currency converter API](https://www.currencyconverterapi.com/docs) was selected to meet the project requirements. In leiu of integrating to APIs together, there are two variants of queries used with the Spoonacular API.

#### Spoonacular API

Search for recipe

```
GET https://api.spoonacular.com/recipes/search?query={SEARCH QUERY}
```

Get ingredients with price

```
GET https://api.spoonacular.com/recipes/{id}/priceBreakdownWidget.json
```

#### Free currency converter API

Get exchange rate

```
GET https://free.currconv.com/api/v7/convert?q=USD_PHP&apiKey=[YOUR_API_KEY]
```

### CSS framework

<pre>
.
└── html
    ├── head
    └── body
        └── main
        |   ├── <a href="https://materializecss.com/cards.html">recipe search card</a>
        |   ├── <a href="https://materializecss.com/cards.html">recipe result cards</a>
        |   └── <a href="https://materializecss.com/table.html">ingredients table</a>
        └── footer
</pre>

#### Materialize CSS

> The page layout utilises the Materialize front end framework to create a responsive webpage. The library was also used to [theme](https://materializecss.com/color.html) the website.

> Material design was used to followtypical style choices. Material design is a digital paper format used to guide users through a site. One important aspect of material design is the use of [shadows](https://materializecss.com/shadow.html). Food-hound uses shadows to highlight the search card and ingrdients table on the website.

> The framework enables full page repsonsiveness for mobile, tablet and desktop views.

<div align="center">
<img alt="interface" src= "assets/images/Food Hound responsiveness.gif" width= 60%/>
</div>

## Challenges

### API contraints

> - Free APIs are generaly limited
> - Front end application meant using a subscription API would be expensive/complex/un-safe.
> - Selecting the apis

### Collaborative work

> - Writing the code
> - styling the site
> - Collaborating and Git
> - Variable skill levels

### Learning new concepts

> - Using a new css framework
> - Keeping design responsive and consistent

## 🚧 [Roadmap](https://github.com/jschrbr/food-hound/wiki/Roadmap)

> Check out what we have in store.

## 🙌 Contributors

### James Schreiber

- Website: https://jschrbr.github.io/
- Github: [@jschrbr](https://github.com/jschrbr)
- LinkedIn: [@techsmechs](https://linkedin.com/in/techsmechs)

### Haylie Goh

- Website: https://dev-hg20.github.io/profile-hw/
- Github: [@dev-hg20](https://github.com/dev-hg20)
- LinkedIn: [Haylie Goh](https://www.linkedin.com/in/haylie-goh-941bb896/)

### Alan Harrison

- Website: https://red-dog77.github.io/
- Github: [@red-dog77](https://github.com/red-dog77)

### DC Cunningham

- Website: https://DCRevResLabs.github.io/
- Github: [@DCRevResLabs](https://github.com/DCRevResLabs)
- LinkedIn: [@DC-Cunningham](https://www.linkedin.com/in/DC-Cunningham)

## 🤝 Contributing

> ### 🔧 [Code abstract](https://github.com/jschrbr/food-hound/wiki/Code-Structure)
>
> Before making contributions have a look at the general strucure of the code, in our docs.

> Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jschrbr/food-hound/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/techsmechs">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
