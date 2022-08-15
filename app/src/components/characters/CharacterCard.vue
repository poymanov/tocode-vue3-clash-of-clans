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
  </div>
</template>

<script>
export default {
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
  },
};
</script>
