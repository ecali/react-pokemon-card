import axios from "axios";
import { useEffect, useState } from "react";
import { PokeResponse } from "../model/pokemon";

export const usePokeApi = (id: number = 1) => {
  const [data, setData] = useState<PokeResponse>();
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchPoke = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setUrl("https://pokeapi.co/api/v2/pokemon/" + id);
    fetchPoke();
    // eslint-disable-next-line 
  }, [id]);

  return { data, isLoading, isError };
};
