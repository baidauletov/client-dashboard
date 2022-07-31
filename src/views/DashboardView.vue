<template>
  <div class="dashboard-view">
    <vs-row>
        <vs-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <div class="content-wrapper">
                    <div class="content content_average" @click="openShop">
                        <span class="content__title">
                            Абонементы
                        </span>
                    </div>
                </div>
            </section>
        </vs-col>
        <vs-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <VueAgile :options="basicAgileOptions" class="vue-agile" >
                    <template slot="prevButton"><iconArrowLeft class="slider-button-icon" /></template>
                    <template slot="nextButton"><iconArrowRight class="slider-button-icon" /></template> 
                    <div v-for="(item, index) in news" :key="index" class="news__item-wrapper">
                        <div class="news__item">    
                            <div class="news__item-image-wrapper">
                                <img :src="item.image ? item.image : newsImage" alt="news image" class="news__item-image">
                            </div>
                            <div class="news__item-content">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </div>
                </VueAgile>
            </section>
        </vs-col>
        <vs-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <div class="content-wrapper">
                    <div class="content">
                        <router-link to="/apps">
                            <span class="content__title">
                                Весь контент
                            </span>
                            <iconArrowRight class="arrow-icon" />
                        </router-link>
                    </div>
                </div>
                <div>
                    <vs-row class="apps__list">
                        <vs-col v-for="(item, index) in appsCards" :key="index" vs-w="4" class="apps__list-item">
                            <gameCard  :product="item"/>
                        </vs-col>
                    </vs-row>
                </div>
            </section>
        </vs-col>
        <vs-col vs-w="6" vs-sm="12" class="dashboard-view__item-wrapper">
            <section class="dashboard-view__item">
                <div class="content-wrapper">
                    <div class="content" @click="openShop">
                        <span class="content__title">
                            Магазин
                        </span>
                        <iconArrowRight class="arrow-icon" />
                    </div>
                </div>
                <div class="shop-content">
                    <vs-row>
                        <vs-col v-for="(item, index) in 4" :key="index" vs-w="6" class="shop-content__item">
                            <div @click="openShop">
                                <shopCard />
                            </div>
                        </vs-col>
                    </vs-row>   
                </div>
            </section>
        </vs-col>
    </vs-row>
  </div>
</template>

<script>
import iconArrowLeft from '@/components/icons/iconArrowLeft.vue'
import iconArrowRight from '@/components/icons/iconArrowRight.vue'
import shopCard from './../components/shop-card.vue'
import gameCard from './../components/game-card.vue'
import newsImage from './../../public/default-news.jpg'
import defaultImage from './../../public/default-app.png'
import { VueAgile } from 'vue-agile'

export default {
    name: 'DashboardView',

    components: {
        VueAgile,
        iconArrowLeft,
        iconArrowRight,
        shopCard,
        gameCard
    },

    data() {
        return {
            basicAgileOptions: {
                dots: false,
                navButtons: true,
                infinite: true,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 1099,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            },
            appsCards: [
                {
                    title: 'app1',
                    image: defaultImage,
                    checked: true
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                },
                {
                    title: 'app1',
                    image: defaultImage
                }
            ],
            news: [
                {
                    image: '',
                    title: 'news1',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news2',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news3',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news4',
                    content: 'lorem ipsum',
                    link: '/'
                },
                {
                    image: '',
                    title: 'news5',
                    content: 'lorem ipsum',
                    link: '/'
                }
            ],
            newsImage: newsImage
        }
    },

    methods: {
        openShop() {
            console.log('dashboard')
            this.$emit('openShop')
        }
    }
}
</script>

<style lang="scss">
.dashboard-view {
    padding: 0.25rem 5rem;
    overflow-y: scroll;
    max-height: 52rem;
    .dashboard-view__item-wrapper {
        padding: 1rem;
        .dashboard-view__item {
            height: 30rem;
            background: gray;
            border-radius: 0.25rem;
            background: #131210;
            .vue-agile {
                height: 100%;
            }
            .news__item-wrapper {
                height: 100%;
                .news__item {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    .news__item-image-wrapper {
                        padding: 1rem;
                        height: 16rem;
                        .news__item-image {
                            width: 100%;
                            height: 100%;
                            aspect-ratio: 1.4;
                            object-fit: cover;
                        }
                    }
                    .news__item-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 0 0 0 1rem;
                        h4 {
                            text-align: left;
                        }
                        p {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
    .apps__list {
        overflow-y: scroll;
        max-height: 25rem;
        .apps__list-item {
            padding: 0.5rem;
            height: 15rem;
        }
    }
    .agile__list {
        height: 90%;
    }
    .agile__actions {
        width: 6rem;
        padding-left: 1rem;
        .agile__nav-button  {
            background: transparent;
            border-color: transparent;
        }
        .slider-button-icon {
            width: 1.5rem;
            fill: white;
            &:hover {
                fill: gray;
            }
        }
    }
    .content-wrapper {
    }
    .content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1rem 1rem 2rem;
        border-bottom: 1px solid rgb(167, 167, 167);
        cursor: pointer;
        &:hover {
            color: rgb(167, 167, 167);
            .arrow-icon{
                fill: rgb(167, 167, 167); 
            }
        }
    }
    .content_average {
        cursor: auto;
        &:hover {
            color: white
        }
    }
    .content__title {
        font-size: 1.125rem;
        text-transform: uppercase;
    }
    .arrow-icon {
        width: 3rem;
        height: 1.25rem;
        fill: white;
    }
    .shop-content {
        .shop-content__item {
            cursor: pointer;
            padding: 0.5rem;
        }
    }
}
</style>