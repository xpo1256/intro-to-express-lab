# ![Intro to Express Lab - Level Up](./assets/hero.png)

## Level Up: Introduction to Query Parameters

In this section, you practice using query parameters to pass information from the URL to the server in an Express application.

### Using Query Parameters

- **Task**: Implement routes that respond to URL query parameters.
- **Concept**: Query parameters are appended to a URL using `?`, formatted as `key=value` pairs, and separated by `&`.
- **Example**: URL with query parameters: `localhost:3000/hello?name=Christy&age=32`.
- **Accessing Parameters**:
  ```js
  app.get('/hello', (req, res) => {
      res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
  });
  ```
  > 🧠 The `req.query` object contains the query parameters. For instance, `{ name: "Christy", age: "32" }`.

### Filter Shoes by Query Parameters

- **Data Array**:
```js
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
```
- **Task**: Create a route `/shoes` that filters the list of shoes based on query parameters.
- **Query Parameters**:
  - `min-price`: Excludes shoes below this price.
  - `max-price`: Excludes shoes above this price.
  - `type`: Shows only shoes of the specified type.
  - No parameters: Responds with the full list of shoes.
- **Objective**: Implement a route that dynamically filters the shoe list based on the provided query parameters.

