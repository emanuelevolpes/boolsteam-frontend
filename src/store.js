import { reactive } from "vue";
const store = reactive({
   gamesApi: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_GAMES_URI,
   games: [],
   oneGameApi: import.meta.env.VITE_BASE_URL,
});

export default store;