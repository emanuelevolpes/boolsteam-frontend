<script>

export default {
    name: 'PriceTag'
}
</script>

<template>
    <div class="d-flex w-100 price-tag">
        <div class="discount w-50 p-1">
            <p class="align-middle">-45%</p>
        </div>
        <div class="price w-50 p-1 d-flex flex-column align-items-end">
            <span class="original-price">49,99 €</span>
            <span class="discounted-price">49,99 €</span>
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
            font-size: 1.875rem;
            font-weight: bold;
        }
    }

    .price {
        background-color: #38404b;

        .original-price {
            color: white;
            opacity: 0.5;
            text-decoration: line-through;
        }

        .discounted-price {
            color: #c2f318;
        }
    }
}
</style>