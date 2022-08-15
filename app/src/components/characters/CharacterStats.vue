<template>
  <div class="card-stats">
    <div class="one-third" v-for="item in stats" :key="item.title">
      <div class="stat-value">{{ item.value }}</div>
      <div class="stat">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
};
</script>
