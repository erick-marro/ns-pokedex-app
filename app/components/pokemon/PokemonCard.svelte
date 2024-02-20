<script lang="ts">
  import { PokemonListItem } from "~/interfaces/pokemon.interface";

  export let pokemon: PokemonListItem;
</script>

<stackLayout
  backgroundColor="#c4e3d4"
  width="47%"
  horizontalAlignment="center"
  verticalAlignment="middle"
  borderRadius="10"
  height="200"
  margin="5"
  class="pokemon-card"
>
  <image src={pokemon.image} />
  <stackLayout
    horizontalAlignment="center"
    verticalAlignment="middle"
    backgroundColor="#fff"
    width="100%"
    height="100%"
    borderBottomLeftRadius="10"
    borderBottomRightRadius="10"
  >
    <label textAlignment="center">{pokemon.name}</label>
  </stackLayout>
</stackLayout>

<style>
  .pokemon-card {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
</style>
