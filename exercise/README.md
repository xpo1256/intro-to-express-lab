# ![Intro to Express Lab - Exercise](./assets/hero.png)

## Introduction

For each section in this lab, you will create an Express route that accepts requests at a specific URL and responds with `res.send`.

### 1. Be Polite, Greet the User 

- **Task**: Create a route that responds to URLs like `/greetings/<username-parameter>`.
- **Examples**: Matches routes like `/greetings/Christy` or `/greetings/Mathilda`.
- **Response**: Include the username from the URL in the response, such as "Hello there, Christy!" or "What a delight it is to see you once more, Mathilda."

### 2. Rolling the Dice

- **Task**: Set up a route to handle URLs following the pattern `/roll/<number-parameter>`.
- **Examples**: Matches routes like `/roll/6` or `/roll/20`.
- **Validation**: If the parameter is not a number, respond with "You must specify a number." For instance, `/roll/potato` should trigger this response.
- **Functionality**: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to `/roll/16` might respond with "You rolled a 14."

### 3. I Want THAT One!

- **Task**: Create a route for URLs like `/collectibles/<index-parameter>`.
- **Examples**: Matches routes such as `/collectibles/2` or `/collectibles/0`.
- **Data Array**:

  ```javascript
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  ```
- **Validation**: If the index does not correspond to an item in the array, respond with "This item is not yet in stock. Check back soon!"
- **Response**: Should describe the item at the given index, like "So, you want the shiny ball? For 5.95, it can be yours!" Include both the `name` and `price` properties.

