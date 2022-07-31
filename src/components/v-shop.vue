<template>
    <div class="shop">
        <vs-row>
            <vs-col vs-w="9" vs-sm="6" class="shop-content">
                <div class="d-flex align-items-center">
                    <vs-tabs>
                        <vs-tab v-for="(item, index) in menuTabs" :key="index" :label="item.title">
                        </vs-tab>
                    </vs-tabs>
                    <input type="text" class="shop-search" placeholder="Поиск по названию">
                </div>
                <section class="shop__list-wrapper">
                    <vs-row class="shop__list">
                        <vs-col v-for="item in 20" :key="item" vs-w="4" class="shop__item">
                            <shop-card ></shop-card>
                        </vs-col>
                    </vs-row>
                </section>
            </vs-col>
            <vs-col vs-w="3" vs-sm="6" class="check-content">
                <div class="check-content__top">
                    <span class="check-content__top-button">
                        Удалить
                    </span>
                </div>
                <div class="check-content__bottom">
                    <p>Комментарии</p>
                    <input class="check-content__bottom-input" type="text">
                </div>
            </vs-col>
        </vs-row>  
    </div>
</template>

<script>
import shopCard from './shop-card.vue'

export default {
    name: 'vShop',

    components: {
        shopCard
    },  

    data() {
        return {
            menuTabs: [
                {
                    title: 'Все',
                    type: 'all'
                },
                {
                    title: 'Все напитки',
                    type: 'all'
                },
                {
                    title: 'салаты/снэки',
                    type: 'all'
                },
                {
                    title: 'горячее/супы',
                    type: 'all'
                },
                {
                    title: 'стрит фуд/соусы',
                    type: 'all'
                },
                {
                    title: 'роллы/пицца',
                    type: 'all'
                },
                {
                    title: 'шоколадки',
                    type: 'all'
                },
                {
                    title: 'сигареты и пиво',
                    type: 'all'
                }
            ],
            extraMenu: [
                {
                    title: 'сеты/гарниры/хлеб',
                    type: 'all'
                },
                {
                    title: 'баланс',
                    type: 'all'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.shop {
    width: 100%;
    height: 80vh;
    background: #141311;
    color: white;
    overflow: hidden;
    .shop-content {
        // background: gray;
        padding: 0.5rem 1rem 0 0;
        ul {
            margin: 0 !important;
        }
        .vs-tabs--btn {
            span {
                font-size: 0.8rem !important;
                font-weight: 600 !important;
                text-transform: uppercase !important;
                transition: none;
                &:hover {
                    color: rgb(187, 187, 187) !important;
                }
            }
        }
        .vs-tabs-primary .con-ul-tabs .activeChild button, .vs-tabs-primary .con-ul-tabs button:not(:disabled){
            color: white !important;
        }
        .vs-tabs--content {
            padding-bottom: 0;
        }
        .shop-search {
            background: #21201f;
            border-radius: 0.125rem;
            border: 1px solid #21201f;
            color: white;
            padding: 0.25rem 0.875rem;
            font-size: 0.875rem;
            margin-right: 0.5rem;
            &:hover {
                border: 1px solid rgb(136, 136, 136);
            }
            &:focus {
                border: 1px solid rgb(136, 136, 136);
            }
        }
    }
    .check-content {
        background: rgb(87, 87, 87);
        border-radius: 0.25rem;
        height: 90%;
        min-height: 45rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .check-content__top {
            display: flex;
            justify-content: flex-end;
            padding: 0.125rem 0.5rem;
            border-bottom: 1px solid rgb(136, 136, 136);;
            .check-content__top-button {
                cursor: pointer;
                &:hover {
                    color: rgb(136, 136, 136);
                }
            }
        }
        .check-content__bottom {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            .check-content__bottom-input {
                background: #21201f;
                border-radius: 0.25rem;
                border: 1px solid #21201f;
                color: white;
                padding: 0.25rem 0.75rem;
                font-size: 1.125rem;
                font-weight: 500;
                width: 20rem;
                margin-bottom: 1rem;
                &:hover {
                    border: 1px solid white;
                }
            }
        }
    }
    .shop__list-wrapper {
        .shop__list {
            overflow-y: scroll;
            max-height: 50rem;
            box-sizing: border-box;
            position: relative;
            .shop__item {
                padding: 0.5rem;
            }
        }
    }
}
</style>