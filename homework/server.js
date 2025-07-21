const express = require("express");
const app = express();

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

app.get("/" , (req,res)=>{
    res.send("Welcome To Main Screen");
})

app.get("/greetings/:username",(req,res)=>{
    res.send(`hello ${req.params.username}`)
}) 

app.get("/roll/:num",(req,res)=>{
    num = Math.random() * parseInt(req.params.num);
    res.send(`Roll:${num}`)
})

app.get("/collectibles/:index",(req,res)=>{
    let i = parseInt(req.params.index)
    if(i > collectibles.length){
        res.send(`This item is not yet in stock. Check back soon!`)
    }else{
        res.send(`in cart ${collectibles[i].name} and ${collectibles[i].price} that is the price`)
    }
    
})

app.get("/shoes",(req,res)=>{
    let shoe = shoes; 
    if(req.query["min-price"]){
        shoe = shoe.filter(shoe => shoe.price >= Number(req.query["min-price"]))
    }else if(req.query["max-price"]){
        shoe = shoe.filter(shoe => shoe.price >= Number(req.query["max-price"]))
    }else if(req.query["type"]){
        shoe = shoe.filter(shoe => shoe.price >= req.query(["type"]))
    }
    res.send(filter);
})

app.listen(3000,()=>{
    
})