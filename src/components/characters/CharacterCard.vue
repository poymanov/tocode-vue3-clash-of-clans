<template>
  <div class="card">
    <div class="card-img__wrapper">
      <img class="card-img" :src="imgUrl" :alt="title" />
    </div>
    <span class="card-name">{{ level }} level</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot></slot>
    </div>
    <CharacterStats :stats="stats" />
  </div>
</template>

<script>
import CharacterStats from "@/components/characters/CharacterStats.vue";

export default {
  components: { CharacterStats },
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    stats: {
      type: Array,
      required: true,
    },
  },
};
</script>
