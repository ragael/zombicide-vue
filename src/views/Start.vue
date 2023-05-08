<script setup>
import { ref } from "vue";
import { useCards } from "../store/cards.js";
import { useGame } from "../store/game";

const { ui, view } = useGame();
const show = ref("");

setTimeout(() => {
  show.value = view.value == "start" ? "on" : "";
}, 0);
</script>

<template>
  <img class="logo" :class="show" :src="ui.logo" />

  <div class="menu" :class="show">
    <img :src="ui.play" @click="view = 'config'" />
    <img :src="ui.resume" class="off" />
    <img :src="ui.close" class="off" />
  </div>
</template>

<style scoped>
.logo {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 80%;
  opacity: 0;
  transition: opacity 1s;
}

.off {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
