
export interface Box {
  id: number;
  name: string;
  boxType: string;
  description: string;
  releaseDate: string;
  boosterPacks: number;
  includedAccessories: string[];
  priceEURO: number;
  isLimitedEdition: boolean;
  imageUrl: string;
}