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

Our idea stemmed from the team’s love for food! We named it Food Hound and it’s basically an application where you can use list an item that you have on hand and it will generate recipe options for you. So you won’t need to stare at your pantry or fridge to figure out what you’re making for lunch or dinner that day!! Basically making lives easier for all
So you don’t know what you want after class as an afternoon treat? Don’t worry, Food hound is your solution. It’s an easy to use application for all ages and it is free of charge!

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
        └── nav
        |   └── <a href="https://materializecss.com/dropdown.html">Currency Dropdown</a>
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

The API we utilised were both free of charge and is limited. Spoonacular has a limit of 150 call per day and the currency converter has a 200 call per month. We chose the free API as this project is a front end application and using subscription based APIs would be unsafe and expensive. We also had a few challenges regarding selecting which APIs to use, we wanted to use Zomato in the beginning but had to use Spoonacular as then we had issues signing up to the Zomato one. We also wanted to utilise Coles/Woolworth API to get the availability, price of an ingredient but we couldn’t get access to it so we opted in for a currency converter.

### Collaborative work

In terms of writing the code, we split our group of 4 into different functions of the applications and split it as 2 on the front-end and 2 on the back-end. The primary focus was getting the AJAX calls to work across both APIs and the HTML/Jquery functions.

Across GIT we made branches, multiple commits, worked on some conflicts. It was good practical experience to pull, push and commit changes. I found the screen share option useful especially when someone’s stuck on git. We also had various skill levels in the team so that made it easier to work together and discuss the code so we didn’t need to share screenshots of our code. We all improved on our detail of commits and general workflow with GIT compared to day 1.

### Learning new concepts

We also used Materialize, because it was automatically responsive. It’s also a standardised style which meets the requirement of our project.

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
