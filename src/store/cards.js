import { reactive, ref, toRefs } from "vue";

const cards = reactive({
  cards: [{ id: 0, type: "", place: "", src: "" }],
});

export const useCards = () => {
  const InitializeCards = () => {
    let list = [
      { type: "spawn", src: "src/assets/1.jpg" },
      { type: "spawn", src: "src/assets/2.jpg" },
      { type: "spawn", src: "src/assets/3.jpg" },
      { type: "spawn", src: "src/assets/4.jpg" },
      { type: "spawn", src: "src/assets/5.jpg" },
      { type: "spawn", src: "src/assets/6.jpg" },
      { type: "spawn", src: "src/assets/7.jpg" },
      { type: "spawn", src: "src/assets/8.jpg" },
      { type: "spawn", src: "src/assets/9.jpg" },
      { type: "spawn", src: "src/assets/10.jpg" },
      { type: "spawn", src: "src/assets/11.jpg" },
      { type: "spawn", src: "src/assets/12.jpg" },
      { type: "spawn", src: "src/assets/13.jpg" },
      { type: "spawn", src: "src/assets/14.jpg" },
      { type: "spawn", src: "src/assets/15.jpg" },
      { type: "spawn", src: "src/assets/16.jpg" },
      { type: "spawn", src: "src/assets/17.jpg" },
      { type: "spawn", src: "src/assets/18.jpg" },
      { type: "spawn", src: "src/assets/19.jpg" },
      { type: "spawn", src: "src/assets/20.jpg" },
      { type: "spawn", src: "src/assets/21.jpg" },
      { type: "spawn", src: "src/assets/22.jpg" },
      { type: "spawn", src: "src/assets/23.jpg" },
      { type: "spawn", src: "src/assets/24.jpg" },
      { type: "spawn", src: "src/assets/25.jpg" },
      { type: "spawn", src: "src/assets/26.jpg" },
      { type: "spawn", src: "src/assets/27.jpg" },
      { type: "spawn", src: "src/assets/28.jpg" },
      { type: "spawn", src: "src/assets/29.jpg" },
      { type: "spawn", src: "src/assets/30.jpg" },
      { type: "spawn", src: "src/assets/31.jpg" },
      { type: "spawn", src: "src/assets/32.jpg" },
      { type: "spawn", src: "src/assets/33.jpg" },
      { type: "spawn", src: "src/assets/34.jpg" },
      { type: "spawn", src: "src/assets/35.jpg" },
      { type: "spawn", src: "src/assets/36.jpg" },
      { type: "spawn", src: "src/assets/37.jpg" },
      { type: "spawn", src: "src/assets/38.jpg" },
      { type: "spawn", src: "src/assets/39.jpg" },
      { type: "spawn", src: "src/assets/40.jpg" },
      { type: "spawn", src: "src/assets/41.jpg" },
      { type: "spawn", src: "src/assets/42.jpg" },
      { type: "spawn", src: "src/assets/43.jpg" },
      { type: "spawn", src: "src/assets/44.jpg" },
      { type: "spawn", src: "src/assets/45.jpg" },
      { type: "spawn", src: "src/assets/46.jpg" },
      { type: "spawn", src: "src/assets/47.jpg" },
      { type: "spawn", src: "src/assets/48.jpg" },
      { type: "spawn", src: "src/assets/49.jpg" },
      { type: "spawn", src: "src/assets/50.jpg" },
      { type: "spawn", src: "src/assets/51.jpg" },
      { type: "spawn", src: "src/assets/52.jpg" },
      { type: "spawn", src: "src/assets/53.jpg" },
      { type: "spawn", src: "src/assets/54.jpg" },
      { type: "spawn", src: "src/assets/55.jpg" },
      { type: "spawn", src: "src/assets/56.jpg" },
      { type: "spawn", src: "src/assets/57.jpg" },
      { type: "spawn", src: "src/assets/58.jpg" },
      { type: "spawn", src: "src/assets/59.jpg" },
      { type: "spawn", src: "src/assets/60.jpg" },
      { type: "spawn", src: "src/assets/61.jpg" },
      { type: "spawn", src: "src/assets/62.jpg" },
      { type: "spawn", src: "src/assets/63.jpg" },
      { type: "spawn", src: "src/assets/64.jpg" },
      { type: "spawn", src: "src/assets/65.jpg" },
      { type: "spawn", src: "src/assets/66.jpg" },
      { type: "player-card", src: "src/assets/sic-amy.jpg" },
      { type: "player-card", src: "src/assets/sic-doug.jpg" },
      { type: "player-card", src: "src/assets/sic-josh.jpg" },
      { type: "player-card", src: "src/assets/sic-ned.jpg" },
      { type: "player-card", src: "src/assets/sic-phil.jpg" },
      { type: "player-card", src: "src/assets/sic-wanda.jpg" },
      { type: "player-token", src: "src/assets/player-1.png" },
      { type: "player-token", src: "src/assets/player-2.png" },
      { type: "player-token", src: "src/assets/player-3.png" },
      { type: "player-token", src: "src/assets/player-4.png" },
      { type: "player-token", src: "src/assets/player-5.png" },
      { type: "player-token", src: "src/assets/player-6.png" },
    ];
    for (let i = 0; i < list.length; i++) {
      const el = list[i];
      el.id = i + 1;
      el.place = "";
    }
    cards.cards = list;
  };

  if (cards.cards.length <= 1) {
    InitializeCards();
  }

  return {
    ...toRefs(cards),
  };
};
