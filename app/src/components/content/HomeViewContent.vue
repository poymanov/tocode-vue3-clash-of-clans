<template>
  <div v-for="character in characters" :key="character.id">
    <CharacterCard
      :imgUrl="character.img"
      :level="character.lvl"
      :title="character.title"
      :stats="character.info"
    >
      {{ character.descr }}
    </CharacterCard>
  </div>
</template>

<script>
import CharacterCard from "@/components/characters/CharacterCard.vue";
import items from "@/seeders/items.js";

export default {
  components: { CharacterCard },
  data() {
    return {
      characters: items,
    };
  },
};
</script>
