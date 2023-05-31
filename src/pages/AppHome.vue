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
            this.store.games = [];
            axios.get(this.store.gamesApi)
                .then((response) => {
                    this.store.games = response.data.games.data;
                })
        }
    },
    created() {
        this.getGames();
    }
}
</script>

<style lang="scss" scoped></style>