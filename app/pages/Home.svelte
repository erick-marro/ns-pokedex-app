<script lang="ts">
  import { onMount } from "svelte";
  import SearchBox from "~/components/common/SearchBox.svelte";
  import PokemonCard from "~/components/pokemon/PokemonCard.svelte";
  import { PokemonListItem } from "~/interfaces/pokemon.interface";
  import { getPokemons } from "~/services/pokemonService";

  let data: PokemonListItem[] = [];

  onMount(() => {
    getPokemons().then((items) => (data = items));
  });
</script>

<page actionBarHidden={true}>
  <scrollView height="100%">
    <stackLayout class="container">
      <label class="page-header outfit-bold">Pokédex</label>
      <label class="page-description outfit" textWrap="true"
        >Search for a pokémon by name or filter by type</label
      >
      <SearchBox />
      <flexboxLayout
        width="100%"
        alignItems="center"
        flexWrap="wrap"
        marginTop="30"
      >
        {#each data as pokemon}
          <PokemonCard {pokemon} />
        {/each}
      </flexboxLayout>
    </stackLayout>
  </scrollView>
</page>

<style>
  .page-header {
    margin-top: 60px;
    font-size: 40px;
  }
  .page-description {
    font-size: 20px;
    color: #757373;
  }
</style>
