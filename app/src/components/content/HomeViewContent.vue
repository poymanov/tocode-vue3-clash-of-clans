<template>
  <div class="view-sm isCenter">
    <CharacterCarousel :characters="items" />
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import CharacterCarousel from "@/components/characters/CharacterCarousel";

export default {
  components: {
    CharacterCarousel,
  },
  data() {
    return {
      characters: items,
    };
  },
};
</script>
