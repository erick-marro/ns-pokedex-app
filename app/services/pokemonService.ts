import { Http } from "@nativescript/core"
import { PokemonListItem, PokemonResponse } from "~/interfaces/pokemon.interface"
import { API_URL } from "~/utils/constants"

export const getPokemons = () => (
    Http.getJSON<PokemonResponse>(`${API_URL}/pokemon?limit=150`).then(
        (res) => {
            return res.results.map((pokemon) => {
                let splitUrl = pokemon.url.split("/");
                let id = splitUrl[splitUrl.length - 2];

                return {
                    ...pokemon,
                    id: id,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                } as PokemonListItem
            })
        }
    )
)