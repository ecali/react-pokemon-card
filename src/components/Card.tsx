import { useEffect, useState } from "react";
import { useTypeColors } from "../hooks/typesColor";
import { PokeEntity, PokeResponse } from "../model/pokemon";

export const Card = (props: { poke: PokeResponse }) => {
  const [poke, setPoke] = useState<PokeEntity>();
  const [color, setColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const pokeColor = useTypeColors();

  useEffect(() => {
    setColor('');
    setSecondColor('');
    if (props.poke?.stats) {
      setPoke({
        name: props.poke?.name ?? "",
        imgSrc: props.poke?.sprites?.other.dream_world?.front_default ?? "",
        hp: props.poke?.stats[0]?.base_stat ?? 0,
        attack: props.poke?.stats[1]?.base_stat ?? 0,
        defense: props.poke?.stats[2]?.base_stat ?? 0,
        speed: props.poke?.stats[5]?.base_stat ?? 0,
        types: props.poke?.types.map((type) => {
          return type.type.name;
        }),
      });
    }
    setColor(
      pokeColor.filter((color) => color.name === poke?.types[0])[0]?.color
    );
    if (poke?.types && poke?.types?.length > 1) {
      setSecondColor(
        pokeColor.filter((color) => color.name === poke?.types[1])[0]?.color
      );
    } else {
      setSecondColor("rgba(255,255,255,1)");
    }
    // eslint-disable-next-line
  }, [props]);

  return (
    <div
      className="card"
      style={{
        background:
          "radial-gradient(circle, " + color + " 0%, " + secondColor + " 100%)",
      }}
    >
      <p className="hp">
        <span>HP</span> {poke?.hp}
      </p>
      <img src={poke?.imgSrc} alt={poke?.name} />
      <h2 className="poke-name">{poke?.name}</h2>
      { poke?.types.length ?
        <div className="types">
        {poke?.types.map((type, key) => (
          <span
            key={key}
            style={{
              backgroundColor: pokeColor.filter(
                (color) => color.name === type
              )[0].color,
            }}
          >
            {type}
          </span>
        ))}
      </div> : ''
      }
      <div className="stats">
        <div>
          <h3>{poke?.attack}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>{poke?.defense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>{poke?.speed}</h3>
          <p>Speed</p>
        </div>
      </div>
    </div>
  );
};
