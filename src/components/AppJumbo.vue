<script>
import store from '../store';
import PriceTag from './PriceTag.vue';
import axios from 'axios';
export default {
    name: 'AppJumbo',
    data() {
        return {
            store,
            oneGame: []
        }
    },
    methods: {
        getOneGame() {
            axios.get(`${this.store.oneGameApi}/api/game`)
                .then((response) => {
                    this.oneGame = response.data.game;
                    console.log(this.oneGame);
                })
        }
    },
    computed: {
        discountPrice() {
            return this.oneGame.price - ((this.oneGame.price / 100) * this.oneGame.discount);
        }
    },
    created() {
        this.getOneGame();
    }
}
</script>
<template>
    <div class="container container_jumbo">
        <div class="width_jumbotrone">
            <div class="jumbo_title">
                <h1>GIOCHI</h1>
            </div>
            <div class="jumbo d-flex">
                <div class="left_slide"></div>
                <div class="game_container d-flex">
                    <div class="game_img d-flex">
                        <div class="game_tag p-1"><font-awesome-icon icon="fa-solid fa-bookmark" /></div>
                        <div class="price d-flex">
                            <div class="discount d-flex">-{{ oneGame.discount }}%</div>
                            <div class="discount_price d-flex">
                                <small>{{ oneGame.price }}€</small>
                                <p>{{ discountPrice.toFixed(2) }}€</p>
                            </div>
                        </div>
                    </div>
                    <!-- game info  -->
                    <div class="game_info">
                        <h3>{{ oneGame.title }}</h3>
                        <h5>Data di rilascio: {{ oneGame.year }}</h5>
                        <div class="info_tag d-flex">
                            <div class="info_tags" v-for="tag in oneGame.tags">{{ tag.name }}</div>
                        </div>
                        <div class="info_tag_down"></div>
                    </div>
                    <!-- /game info  -->
                </div>
                <div class="right_slide"></div>
            </div>
        </div>
        <!-- jumbotrone  -->

    </div>
    <!-- /jumbotrone  -->
    <!-- special offer  -->
    <div class="container container_special_offer">
        <h4>OFFERTE SPECIALI</h4>
        <div class="special_offer_container d-flex">
            <div class="special_offer_game">
                <div class="special_offer_img"><img
                        src="https://assets.2k.com/1a6ngf98576c/2RNTmC7iLr6YVlxBSmE4M3/11177cffa2bdbedb226b089c4108726a/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-CROSSGEN_EDITION-425x535.jpg">
                </div>
                <div class="special_offer_price d-flex">
                    <div class="special_offer_discount d-flex align-items-center">-50%</div>
                    <div class="special_offer_prices">
                        <small style="text-decoration: line-through;">100,00 €</small>
                        <p>50,00 €</p>
                    </div>
                </div>
            </div>
            <div class="special_offer_game">
                <div class="special_offer_img"><img
                        src="https://cdn.cloudflare.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667">
                </div>
                <div class="special_offer_price d-flex">
                    <div class="special_offer_discount d-flex align-items-center">-50%</div>
                    <div class="special_offer_prices">
                        <small style="text-decoration: line-through;">100,00 €</small>
                        <p>50,00 €</p>
                    </div>
                </div>
            </div>
            <div class="special_offer_game">
                <div class="special_offer_img">
                    <img src="https://cdn2.unrealengine.com/uncharted-legacy-of-thieves-2400x1350-48ae6d0d3c67.png">
                </div>
                <div class="special_offer_price d-flex">
                    <div class="special_offer_discount d-flex align-items-center">-50%</div>
                    <div class="special_offer_prices">
                        <small style="text-decoration: line-through;">100,00 €</small>
                        <p>50,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /special offer  -->
</template>
<style lang="scss" scoped>
// jumbotrone 
.container_jumbo {
    background-image: url(https://picsum.photos/200/300);
    background-size: cover;
    padding-bottom: 30px;

    .width_jumbotrone {
        width: 1200px;
        margin: 0 auto;
    }

    .jumbo_title {
        width: 70%;
        margin: auto;

        h1 {
            color: white;
        }
    }
}

.jumbo {
    height: 300px;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
}

.game_container {
    width: 80%;
    height: 100%;
}

.left_slide {
    width: 5%;
    height: 60%;
    background-color: rgba(14, 13, 13, 0.4);
}

.right_slide {
    width: 5%;
    height: 60%;
    background-color: rgba(14, 13, 13, 0.4);
}

.game_img {
    width: 30%;
    height: 100%;
    background-image: url(https://picsum.photos/200/300);
    background-size: 100%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    .game_tag {
        background-color: #026db3;
        color: white;
    }

    .price {
        width: 50%;
    }

    .discount {
        background-color: #4b6a24;
        color: #b9ee17;
        align-items: center;
        font-size: 17px;
        width: 50%;
        justify-content: center;
    }

    .discount_price {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        background-color: #344650;
        font-size: 12px;
        color: white;

        small {
            text-decoration: line-through 1px;
        }

        p {
            color: #b9ee17;
            margin-bottom: 0;

            small {
                color: lightgray;
            }
        }
    }
}

// game info 
.game_info {
    width: 70%;
    padding-left: 10px;
    padding-right: 40px;
    background-color: rgba(204, 202, 202, 0.2);

    h3 {
        color: white;
    }

    h5 {
        color: gray;
    }

    .info_tag {
        color: #95969a;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .info_tags {
        margin-right: 5px;
        background-color: rgba(95, 94, 94, 0.3);
    }
}

// special offer 
.container {
    max-width: 100%;
    width: 1200px;
}

.container_special_offer {
    padding-bottom: 100px;
    padding-top: 30px;

    h4 {
        color: white;
        padding-bottom: 20px;
        padding-left: 50px;
    }
}

.special_offer_container {
    justify-content: space-between;
    padding: 20px 50px;
}

.special_offer_game {
    width: calc(100%/3 - 30px);
    height: 300px;
}

.special_offer_img {
    height: 300px;
    width: 100%;

    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
}

.special_offer_price {
    width: 45%;
}

.special_offer_discount {
    background-color: #4b6a24;
    color: #b9ee17;
    font-size: 30px;
    width: 50%;
    justify-content: center;
}

.special_offer_prices {
    width: 50%;
    background-color: #344650;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #b9ee17;
        margin-bottom: 0;
    }

    small {
        color: lightgray;
    }
}

// debug 
// .special_offer_img {
//     // border: 1px solid white;
// }

// .left_slide {
//     border: 1px solid white;
// }

// .right_slide {
//     border: 1px solid white;
// }</style>