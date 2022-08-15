<template>
  <div class="view-sm isCenter">
    <div class="wrapper character-wrapper" v-if="currentCharacter">
      <div>
        <img :src="currentCharacter.img" :alt="currentCharacter.title" />
        <h1 class="title">The Barbarian</h1>
        <p>{{ currentCharacter.descr }}</p>
      </div>
      <CharacterStats
        :stats="currentCharacter.info"
        class="card-stats-character-view"
      />
      <div>
        <RouterLink to="/" class="btn btnWhite">Back to Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import CharacterStats from "@/components/characters/CharacterStats.vue";

export default {
  components: { CharacterStats },
  data() {
    return {
      characters: items,
      currentCharacter: null,
    };
  },
  created() {
    const alias = this.$route.params.alias;
    const filteredCharacters = items.filter((item) => item.alias === alias);

    if (filteredCharacters.length > 0) {
      this.currentCharacter = filteredCharacters[0];
    } else {
      this.$router.push("/404");
    }
  },
};
</script>
