<script setup>
import { ref } from "vue";
import { useCards } from "../store/cards.js";
import { useGame } from "../store/game";

const props = defineProps({
  type: String,
  headerImage: String,
});
const { cards } = useCards();
const cardList = cards.value.filter((c) => c.type == props.type);
const list = ref(null);
const scroll = (evt) => {
  let velocity = 50;
  evt.preventDefault();
  //   list.value.scrollLeft += evt.deltaY;
  if (evt.deltaY > 0) {
    list.value.scrollLeft += velocity;
  } else {
    list.value.scrollLeft -= velocity;
  }
};
const { viewCard } = useGame();
</script>

<template>
  <div class="box">
    <div class="header">
      <img :src="props.headerImage" />
    </div>
    <div ref="list" class="list" @wheel="scroll">
      <div
        class="card"
        v-for="card in cardList"
        :id="card.id"
        @click="viewCard = card"
      >
        <img class="card-img" :src="card.src" />
        <!-- <img :src="card.src" v-if="card.place != ''" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  background: lightgray;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
  align-items: center;
  opacity: 0;
  transition: opacity 1s;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  gap: 5px;
  max-height: 250px;
  margin-bottom: 15px;
}
.list {
  display: flex;
  width: 100%;
  /* box-shadow: inset 2px 2px 3px 2px rgba(0, 0, 0, 0.5); */
  box-shadow: inset 0 0 3px 2px rgba(0, 0, 0, 0.5);
  max-height: 240px;
  padding: 10px;
  overflow-x: scroll;
  gap: 10px;
  background: darkgray;
}
.card {
  min-width: 150px;
  max-width: 150px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.card-img {
  width: 100%;
}
</style>
