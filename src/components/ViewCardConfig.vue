<script setup>
import { ref } from "vue";
import { useGame } from "../store/game";

const { viewCard, ui } = useGame();
const show = ref("");
const classImage = ref("all");
const body = document.querySelector("body");
const placeIcon = ref("");

const ToggleImageSize = () => {
  if (classImage.value == "all") {
    classImage.value = "";
  } else {
    classImage.value = "all";
  }
};
const CloseModal = () => {
  viewCard.value = null;
  body.style.overflow = "";
};
const GetPlaceIcon = () => {
  if (viewCard.value.place == "player-1") {
    placeIcon.value = ui.value.person;
  } else {
    placeIcon.value = ui.value.sell;
  }
};

setTimeout(() => {
  show.value = viewCard != null ? "on" : "";
}, 0);

body.style.overflow = "hidden";
</script>

<template>
  <div class="modal" :class="show">
    <img class="card" :class="classImage" :src="viewCard.src" />

    <div class="menu" :class="show">
      <img :src="ui.back" @click="CloseModal" />
      <img
        :src="ui.fullScreen"
        @click="ToggleImageSize"
        v-if="classImage == 'all'"
      />
      <img
        :src="ui.shrink"
        @click="ToggleImageSize"
        v-if="classImage != 'all'"
      />
      <img :src="placeIcon" @click="" />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 1s;
  text-align: center;
  padding: 1rem;
  overflow: auto;
}
.all {
  max-width: 100%;
  max-height: 100%;
}
.card {
  margin-bottom: 64px;
}
</style>
