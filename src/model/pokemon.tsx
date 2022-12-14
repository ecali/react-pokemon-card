export interface PokeEntity {
  hp: number;
  imgSrc: string;
  name: string;
  attack: number;
  speed: number;
  defense: number;
  types: string[];
  color: string, 
  secondColor: string
}

export interface PokeResponse {
  stats: pokeStats[];
  sprites: pokeSprites;
  name: string;
  types: pokeTypes[];
}

interface pokeStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface pokeSprites {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

interface pokeTypes {
  slot: number;
  type: {
    name: string;
  };
}
