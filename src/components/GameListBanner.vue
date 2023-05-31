<script>
import PriceTag from './PriceTag.vue'
export default {
    name: 'GameListBanner',
    props: {
        game: Object,
    },
    components: {
        PriceTag,
    },
}
</script>

<template>
    <div class="banner row">
        <div class="thumb col-3">
            <img class="img-fluid" src="{{ game.image }}" alt="">
        </div>
        <div class="details col ">
            <h3>{{ game.title }}</h3>
            <div class="tags d-flex align-items-center gap-1">
                <span v-for="genre in game.genres">{{ genre.name }}</span>
            </div>
            <div class="d-flex gap-2">
                <div class="release-date">{{ game.year }}</div>
                <div class="platform d-flex gap-1">
                    <div v-show="this.game.platform.includes('Windows')">Windows</div>
                    <div v-show="this.game.platform.includes('Mac')">Mac</div>
                    <div v-show="this.game.platform.includes('Steam')">Steam</div>
                </div>
            </div>
        </div>
        <div class="price col-2 d-flex align-items-end">
            <PriceTag class="h-25" :price="game.price" :discount="game.discount" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    background-color: #3e4650;
    height: 200px;

    .details {
        color: white;
        opacity: 0.7;

        span {
            background-color: #515964;
            padding: .125rem .3125rem;
            font-size: 0.7rem;
            text-align: center;
            border-radius: .3125rem;
        }
    }

}
</style>
