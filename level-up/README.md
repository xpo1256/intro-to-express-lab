# ![Intro to Express Lab - Level Up](./assets/hero.png)

## Query Params

Another way to pass information from the URL to the server is to query parameters. Query parameters are added to the end of a URL after a `?` and are formatted as `key=value` pairs. Multiple query parameters can be added to a URL by separating them with `&`. For example, the following URL has two query parameters, `name` and `age`:

`localhost:3000/hello?name=Christy&age=32`

Query parameters are available in the server's `req.query` object. We can access the values of the `name` and `age` query parameters like so:

```js
app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});
```

> 🧠 If we were to `console.log` the `req.query` object, we would see an object that looks like this; `{ name: "Christy", age: "32" }`

### Challenge: Query Params

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
];
```

This route should accept requests to `/shoes` and respond with a list of shoes matching the provided filter. Use the following query parameters to achieve this:

- `min-price` should filter out shoes lower than the provided `min-price`.
- `max-price` should filter out any shoes with a higher price than the provided `max-price`.
- `type` should filter out shoes with a `type` property that doesn't match the provided `type`.
- If no query parameters are provided, the route should respond with the entire list of shoes.