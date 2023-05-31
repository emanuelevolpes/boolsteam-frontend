<script>
export default {
    name: 'AppJumbo'
}
</script>
<template>
    <div class="container container_jumbo">
        <div class="jumbo_title">
            <h1>GIOCHI</h1>
        </div>
        <!-- jumbotrone  -->
        <div class="jumbo d-flex">
            <div class="left_slide"></div>
            <div class="game_container d-flex">
                <div class="game_img d-flex">
                    <div class="game_tag">tag</div>
                    <div class="price d-flex">
                        <div class="discount d-flex">50%</div>
                        <div class="discount_price d-flex">
                            <small>price</small>
                            <p>price/</p>
                        </div>
                    </div>
                </div>
                <!-- game info  -->
                <div class="game_info">
                    <h3>Titolo gioco</h3>
                    <h5>Data di rilascio:</h5>
                    <div class="info_tag d-flex">
                        <div class="info_tags">tag</div>
                        <div class="info_tags">tag</div>
                        <div class="info_tags">tag</div>
                    </div>
                    <div class="info_tag_down"></div>
                </div>
                <!-- /game info  -->
            </div>
            <div class="right_slide"></div>
        </div>
    </div>
    <!-- /jumbotrone  -->
    <!-- special offer  -->
    <div class="container container_special_offer">
        <h4>OFFERTE SPECIALI</h4>
        <div class="special_offer_container d-flex">
                <div class="special_offer_game">
                    <div class="special_offer_img">img</div>
                    <div class="special_offer_price d-flex">
                        <div class="special_offer_discount d-flex align-items-center">50%</div>
                        <div class="special_offer_prices">
                            <small>price</small>
                            <p>price/</p>
                        </div>
                    </div>
                </div>
                <div class="special_offer_game">
                    <div class="special_offer_img">img</div>
                    <div class="special_offer_price d-flex">
                        <div class="special_offer_discount d-flex align-items-center">50%</div>
                        <div class="special_offer_prices">
                            <small>price</small>
                            <p>price/</p>
                        </div>
                    </div>
                </div>
                <div class="special_offer_game">
                    <div class="special_offer_img">img</div>
                    <div class="special_offer_price d-flex">
                        <div class="special_offer_discount d-flex align-items-center">50%</div>
                        <div class="special_offer_prices">
                            <small>price</small>
                            <p>price/</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- /special offer  -->
</template>
<style lang="scss" scoped>
// jumbotrone 
.container_jumbo{
    background-image: url(https://picsum.photos/200/300);
    background-size: cover;
    width: 1140px;
    padding-bottom: 30px;
    .jumbo_title{
        width: 70%;
        margin: auto;
        h1{
            color: white;
        }
    }
}
.jumbo{
    height: 300px;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
}
.game_container{
    width: 80%;
    height: 100%;
}
.left_slide{
    width: 5%;
    height: 60%;
    background-color: rgba(14, 13, 13, 0.4);
}
.right_slide{
    width: 5%;
    height: 60%;
    background-color: rgba(14, 13, 13, 0.4);
}
.game_img{
    width: 30%;
    height: 100%;
    background-image: url(https://picsum.photos/200/300);
    background-size: 100%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    .game_tag{
        background-color: #026db3;
        color: white;
    }
    .price{
        width: 50%;
    }
    .discount{
        background-color: #4b6a24;
        color: #b9ee17;
        align-items: center;
        font-size: 25px;
        width: 50%;
    }
    .discount_price{
        align-items: center;
        flex-direction: column;
        width: 50%;
        background-color: #344650;

        p{
        color: #b9ee17;
        margin-bottom: 0;

        small{
        color: lightgray; }
    }
    }
}

// game info 
.game_info{
    width: 70%;
    padding-left: 10px;
    padding-right: 40px;
    background-color: rgba(204, 202, 202, 0.2);

    h3{
        color: white;
    }
    h5{
        color: gray;
    }
    .info_tag{
        color: #95969a;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .info_tags{
        margin-right: 5px;
        background-color: rgba(95, 94, 94, 0.3);    }
}
// special offer 
.container_special_offer {
    max-width: 980px;
    background-color: #0f1014;
    padding-bottom: 100px;
    padding-top: 30px;
    h4{
        color: white;
        padding-bottom: 20px;
    }
}
.special_offer_container{
    justify-content: space-between;
}
.special_offer_game {
    width: calc(100%/3 - 30px);
    height: 300px;
}
.special_offer_img{
    height: 285px;
    width: 100%;
}

.special_offer_price{
    width: 45%;
}
.special_offer_discount {
    background-color: #4b6a24;
    color: #b9ee17;
    font-size: 30px;
    width: 50%;
    justify-content: center;
}
.special_offer_prices{
    width: 50%;
    background-color: #344650;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: #b9ee17;
        margin-bottom: 0;
    }
    small{
        color: lightgray;
    }
}
// debug 
.special_offer_img{
    border: 1px solid white;
}
.left_slide{
    border: 1px solid white;
}
.right_slide{
    border: 1px solid white;
}
</style>