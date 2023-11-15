# ![Intro to Express Lab - Level Up](./assets/hero.png)

### Query Params

Query parameters are frequently used to send requests the provide a filter for the results the user wants. For example, an e-commerce store might use query parameters in a url to allow a user to bookmark a search for items with a particular category and with a limited range of prices, like so:

`/items?cat=clothing&min-price=10&max-price=25`

Use the following array of shoes in this challenge:

```js
const shoes = [
    {name: "Birkenstocks", price: 50, type: "sandal"},
    {name: "Air Jordans", price: 500, type: "sneaker"},
    {name: "Air Mahomeses", price: 501, type: "sneaker"},
    {name: "Utility Boots", price: 20, type: "boot"},
    {name: "Velcro Sandals", price: 15, type: "sandal"},
    {name: "Jet Boots", price: 1000, type: "boot"},
    {name: "Fifty-Inch Heels", price: 175, type: "heel"}
]
```

This route should accept requests to `/shoes` and responds with an array of objects that pass any provided filter parameters. Use the following query parameters to achieve this:

`min-price` should filter out any shoes with a lower price than the provided `min-price`.

`max-price` should filter out any shoes with a higher price than the provided `max-price`

`type` should filter out any shoes with a `type` property that doesn't match the provided `type`