# ![Intro to Express Lab - Exercise](./assets/hero.png)

## Introduction

For each section in this lab, you will create an express route that accepts requests at a specific URL and responds with `res.send`.

### Be Polite, Greet the User 

This route accepts requests at `/greetings/<username-parameter>` matching routes, such as `/greetings/Christy` or `/greetings/Mathilda`.

It should send a response that includes the username from the URL pattern, such as "Hello there, Christy!" or "What a delight it is to see you once more, Mathilda."

### Rolling the Dice

This route accepts requests at `/roll/<number-parameter>` matching routes, such as `/roll/6` or `/roll/20`.

**VALIDATION ALERT**: If the number parameter isn't a number, respond with a message saying, "You must specify a number." For example, a request to `/roll/potato` would trigger this result.

If a valid number was provided, this route should send a response that includes the result of a random, whole number generated between 0 and the given number URL parameter. For example, a request to `/roll/16` would generate a random whole number between 0 and 16 and send back a response such as "You rolled a 14." 

### I Want THAT One!

This route accepts requests at `/collectibles/<index-parameter>` matching routes, such as `/collectibles/2` or `/collectibles/0`.

In this route, use the following array of collectibles:

```javascript
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
```

**VALIDATION ALERT**: If the given index does not land in the existing array, send a response to the user saying, "This item is not yet in stock. Check back soon!"

The response should include a message about the object found at the input index, such as "So, you want the shiny ball? For 5.95, it can be yours!" Include both the `name` property and the `price` property in the message.
