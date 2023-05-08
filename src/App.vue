<script setup>
import { useGame } from "./store/game";
import Config from "./views/Config.vue";
import Start from "./views/Start.vue";

const { view } = useGame();
</script>

<template>
    <Start v-if="view == 'start'" />
    <Config v-if="view == 'config'" />
</template>

<style scoped>
</style>
