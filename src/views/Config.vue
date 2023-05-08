<script setup>
import { ref } from "vue";
import Lista from "../components/Lista.vue";
import { useGame } from "../store/game";
import ViewCardConfig from "../components/ViewCardConfig.vue";

const { ui, view, viewCard } = useGame();
const show = ref("");

setTimeout(() => {
  show.value = view.value == "config" ? "on" : "";
}, 0);
</script>

<template>
  <Lista type="player-card" :header-image="ui.person" :class="show" />
  <Lista type="spawn" :header-image="ui.monster" :class="show" />
  <Lista type="player-token" :header-image="ui.pawn" :class="show" />

  <div class="menu" :class="show">
    <img :src="ui.back" @click="view = 'start'" />
  </div>

  <ViewCardConfig v-if="viewCard != null"/>
</template>

<style scoped></style>
