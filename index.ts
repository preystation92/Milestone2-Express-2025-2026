import express from 'express'
import ejs from 'ejs'
import { PokemonCard } from './types/pokemonCards'
import { PokemonBoxes } from './types/pokemonBoxes'
import { fetchData } from './myfunctions/functions'
import cardRouter from './routers/routes/cards'
const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("port", 3000)
let pokeBoxesurl = "https://raw.githubusercontent.com/preystation92/milestone_0_Dataset/refs/heads/main/jsonFiles/pokemonBoxes.json"
let shopName: string = "PokeDeck Terminal"
let shopDescription = "is een online platform gericht op de verkoop van Pokémonkaarten.Gebruikers kunnen kaarten bekijken, details raadplegen en veilig aankopen doen.De website is ontworpen voor zowel beginnende trainers als ervaren verzamelaars die op zoek zijn naar specifieke kaarten."

app.get("/", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/Milestone_1_Terminal-App/main/milestone-1/jsonFiles/pokemonCards.json")
  let pokemonCards: PokemonCard = await response.json();

  res.render("index", { shopName, shopDescription, pokemonCards })
})


app.get("/card", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/milestone_0_Dataset/refs/heads/main/jsonFiles/pokemonBoxes.json")
  let pokemonCards: PokemonCard = await response.json();
  res.render("card", { pokemonCards, shopName, shopDescription });
});
app.get("/card/:id", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/Milestone_1_Terminal-App/main/milestone-1/jsonFiles/pokemonCards.json")
  let pokemonCards: PokemonCard = await response.json();
  res.render("card-detail", { pokemonCards, shopName, shopDescription })
})
app.get("/box", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/Milestone_1_Terminal-App/refs/heads/main/milestone-1/jsonFiles/boxes.json")
  let pokemonBoxes: PokemonBoxes = await response.json();
  res.render("box", { pokemonBoxes, shopName, shopDescription });
});





app.listen(app.get("port"), () => {
  console.log(app.get("port"))
})

app.use((req, res) => {
  res.type("html")
  res.status(404)
  res.send("page not found")
})