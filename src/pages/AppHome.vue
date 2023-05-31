<template>
    <section>
        <h1 class="text-center p-4">HOME PAGE</h1>
        <GamesList />
    </section>
</template>

<script>
import GamesList from '../components/GamesList.vue';

export default {
    name: 'AppHome',
    components: {
        GamesList
    }
}
</script>

<style lang="scss" scoped></style>