import { PokemonBoxes } from './pokemonBoxes'
export interface CardType {
  id: number;
  name: string;
  color: string;
  weakness: string;
  resistance: string;
}
export interface PokemonCard {
  id: string;
  name: string;
  description: string;
  hp: number
  isHolofoil: boolean;
  releaseDate: string;
  imageUrl: string;
  rarity: string;
  attacks: string[];
  cardType: CardType;
  featuredInBox?: PokemonBoxes;
}