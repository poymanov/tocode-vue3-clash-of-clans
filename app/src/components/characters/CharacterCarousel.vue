<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="character in characters" :key="character.id">
      <CharacterCard
        :imgUrl="character.img"
        :level="character.lvl"
        :title="character.title"
        :stats="character.info"
      >
        {{ character.descr }}
      </CharacterCard>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import CharacterCard from "@/components/characters/CharacterCard.vue";
import { carousel } from "@/_config";
import { Slide, Carousel, Navigation } from "vue3-carousel";

export default {
  components: {
    CharacterCard,
    Slide,
    Carousel,
    Navigation,
  },
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: carousel.settings,
      breakpoints: carousel.breakpoints,
    };
  },
};
</script>
