import { reactive, toRefs } from "vue";

const game = reactive({
  ui: {
    logo: "src/assets/logo.png",
    play: "src/assets/play.png",
    resume: "src/assets/resume.png",
    close: "src/assets/close.png",
    back: "src/assets/back.png",
    person: "src/assets/person.png",
    monster: "src/assets/monster.png",
    pawn: "src/assets/pawn.png",
    shrink: "src/assets/shrink.png",
    fullScreen: "src/assets/full-screen.png",
    sell: "src/assets/sell.png",
  },
  view: "start",
  viewCard: null,
});

export const useGame = () => {
  return {
    ...toRefs(game),
  };
};
