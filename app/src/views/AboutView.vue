<template>
  <div class="view-sm isCenter">
    <div class="md-body">
      <h1>В этом приложении разработано:</h1>
      <ul>
        <li>Vue-Router в связке Vue.js 3</li>
        <li>Динамические маршруты</li>
        <li>Хранение и взаимодействие с данными из Seeders</li>
        <li>Слайдер с персонажами</li>
      </ul>
      <p>
        Сделано на курсе
        <a :href="courseUrl" target="_blank" class="link isWhite"
          >"Vue.js 3 С нуля до результата"</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { app } from "@/_config.js";

export default {
  data() {
    return {
      courseUrl: app.courseUrl,
    };
  },
};
</script>
