<template>
    <section>
        <h1 class="text-center p-4">HOME PAGE</h1>
        <GamesList />
    </section>
</template>

<script>
import axios from 'axios';
import store from '../store';

import GamesList from '../components/GamesList.vue';

export default {
    name: 'AppHome',
    components: {
        GamesList
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getGames() {
            console.log(this.store.games);
            this.store.games = [];

            axios.get(this.store.gamesApi)
                .then((response) => {
                    this.store.games = response.data.games;
                })
        }
    },
    created() {
        this.getGames();
    }
}
</script>

<style lang="scss" scoped></style>