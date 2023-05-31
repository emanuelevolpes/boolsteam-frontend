<script>

export default {
    name: 'PriceTag',
    props: {
        price: Number,
        discount: Number,
    },
    computed: {
        getDiscountedPrice() {
            return this.price - (this.price / 100) * this.discount;
        }
    }
}
</script>

<template>
    <div class="d-flex w-100 price-tag">

        <div class="discount w-50">
            <p v-show="price > 0" class="align-middle">-{{ discount }}%</p>
        </div>
        <div class="price w-50 d-flex flex-column align-items-end">
            <span v-if="price > 0" class="original-price">{{ price }} €</span>
            <span v-else class="original-price">free to play</span>
            <span v-show="price > 0" class="discounted-price">{{ this.getDiscountedPrice.toFixed(2) }} €</span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.price-tag {
    text-align: center;

    .discount {
        background-color: #4d6a27;

        p {
            color: #c2f318;
            font-size: 1.4vw;
            font-weight: bold;
        }
    }

    .price {
        background-color: #38404b;

        .original-price {
            color: white;
            opacity: 0.5;
            text-decoration: line-through;
            font-size: 1vw;
        }

        .discounted-price {
            color: #c2f318;
            font-size: 1vw;
        }
    }
}
</style>