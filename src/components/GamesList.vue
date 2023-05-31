<script>
import GameListBanner from './GameListBanner.vue';
import store from '../store';

export default {
    name: 'GamesList',
    data() {
        return {
            store,
        }
    },
    components: {
        GameListBanner,

    }
}
</script>

<template>
    <section>
        <div class="container">
            <h2 class="py-3">I GIOCHI</h2>
            <div class="d-flex flex-column gap-1">

                <GameListBanner :game="game" v-for="game in this.store.games.data" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #4b5b6a;

    .container {
        padding-bottom: 100px;

        h2 {
            color: white;
        }
    }

}
</style>