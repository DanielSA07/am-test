export interface Character {
  id: number;
  name: string;
  image: string;
  status: 'Alive' | 'Dead';
  species: string;
}
