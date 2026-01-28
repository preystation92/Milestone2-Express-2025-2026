import express from 'express'
import ejs from 'ejs'
import { PokemonCard } from './types/pokemonCards'
import { Box } from './types/pokemonBoxes'
const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("port", 3000)

let shopName: string = "PokeDeck Terminal"
let shopDescription = "is een online platform gericht op de verkoop van Pokémonkaarten.Gebruikers kunnen kaarten bekijken, details raadplegen en veilig aankopen doen.De website is ontworpen voor zowel beginnende trainers als ervaren verzamelaars die op zoek zijn naar specifieke kaarten."
app.get("/", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/Milestone_1_Terminal-App/main/milestone-1/jsonFiles/pokemonCards.json")
  let cards: PokemonCard = await response.json();

  res.render("index", { shopName, shopDescription, cards })
})
app.get("/cards", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/Milestone_1_Terminal-App/main/milestone-1/jsonFiles/pokemonCards.json")
  let data = await response.json();
  res.type("application/json");
  res.json(data);
});

app.get("/boxes", async (req, res) => {
  let response = await fetch("https://raw.githubusercontent.com/preystation92/Milestone_1_Terminal-App/refs/heads/main/milestone-1/jsonFiles/boxes.json")
  let data = await response.json();
  res.type("application/json");
  res.json(data);
});





app.listen(app.get("port"), () => {
  console.log(app.get("port"))
})

app.use((req, res) => {
  res.type("html")
  res.status(404)
  res.send("page not found")
})