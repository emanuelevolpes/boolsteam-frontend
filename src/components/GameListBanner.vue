<script>
import PriceTag from './PriceTag.vue'
export default {
    name: 'GameListBanner',
    components: {
        PriceTag,
    }
}
</script>

<template>
    <div class="banner row">
        <div class="thumb col-3">
            <img class="img-fluid" src="" alt="">
        </div>
        <div class="details col p-1">
            <h3>TITOLO GIOCO</h3>
            <div class="tags d-flex g-1">
                <span class="p-1">sparatutto</span>
            </div>
            <div class="d-flex">
                <div class="release-date">11 settembre 2011</div>
                <div class="platform">

                </div>
            </div>
        </div>
        <div class="price col-3 p-1 d-flex align-items-end">
            <PriceTag class="h-50" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    background-color: #3e4650;

    .details {
        color: white;
        opacity: 0.7;

        .span {
            background-color: #49515b;
            font-size: 1rem;
        }
    }
}
</style>
