<template>
    <div class="shop-card">
        <span class="shop-card__product-title">
            {{ product.title }}
        </span>  
        <vs-row >
            <vs-col vs-w="5" class="shop-card__image-wrapper">
                <img :src="product.image ? product.image : shopImage" alt="product-log">
            </vs-col>
            <vs-col vs-w="7" class="shop-card__content">
                <span class="shop-card__description">
                    {{ product.description }}
                </span>
                <span>
                    {{ product.price }}
                </span>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import defaultImage from './../../public/shop-default.png'

export default {
    name: 'shopCard',

    props: {
        product: {
            type: Object,
            default() {
                return {
                    title: 'Product name',
                    description: 'Product description',
                    image: '',
                    price: '1.00 $'
                }
            }
        }
    },

    data() {
        return {
            shopImage: defaultImage
        }
    }
}
</script>

<style lang="scss">
.shop-card {
    background: #21201f;
    border-radius: 0.25rem;
    min-height: 10rem;
    padding: 1rem;
    cursor: pointer;
    .shop-card__product-title {
        display: inline-block;
        padding: 0 0 0.5rem;
        width: 100%;
        text-align: left;
    }
    .shop-card__image-wrapper {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1;
            border-radius: 0.125rem;
        }
    }
    .shop-card__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 1rem;
        .shop-card__description {
            color: #868686;
            text-align: left;        
        }
    }
}
</style>