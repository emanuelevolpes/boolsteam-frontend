<template>
    <section>
        <AppJumbo />
        <GamesList />
    </section>
</template>

<script>
import axios from 'axios';
import store from '../store';

import GamesList from '../components/GamesList.vue';
import AppJumbo from '../components/AppJumbo.vue';

export default {
    name: 'AppHome',
    components: {
    GamesList,
    AppJumbo
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