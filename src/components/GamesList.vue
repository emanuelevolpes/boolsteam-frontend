<script>
import GameListBanner from './GameListBanner.vue';
export default {
    name: 'GamesList',
    components: {
        GameListBanner
    }
}
</script>

<template>
    <section>
        <div class="container">
            <h2 class="py-3">I GIOCHI</h2>
            <div class="d-flex flex-column gap-1">
                <GameListBanner />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: #4b5b6a;

    .container {

        h2 {
            color: white;
        }
    }

}
</style>