<template>
    <div class="vue-sidebar">
        <div class="first-block">
            <span class="first-block__avatar-wrapper">
                <router-link to="/login-edit">
                    <iconAvatar />
                </router-link>
            </span>
            <div class="first-block__name-wrapper">
                <span>
                    <router-link to="/login-edit">
                        <span class="first-block__accaunt">Мои акканты</span><iconArrowRight class="icon-arrow" />
                    </router-link>
                </span>
                <router-link to="/login-edit">
                    <span class="first-block__username">
                        {{ userNickname }}
                    </span>
                </router-link>
            </div>
        </div>
        <div class="second-block">
            <div class="second-block__left">
                <span class="second-block__left-title">Осталось | чч:мм</span>
                <span class="second-block__left-data">00:00</span>
            </div>
            <div class="second-block__right">
                <span class="second-block__right-title">Сессия по тарифу</span>
                <span class="second-block__right-data">0.00 KZT/час</span>
            </div>
        </div>
        <div class="third-block">
            <div class="third-block__top">
                <span class="third-block__top-title">Баланс KZT <iconArrowRight class="icon-arrow" /></span>
                <span class="third-block__top-data">80.43</span>
            </div>
            <div>
                <button>
                    ЧЕКОМ
                </button>
                <button>
                    ОНЛАЙН
                </button>
            </div>
        </div>
        <div class="fourth-block">
            <span class="fourth-block__title">Программа лояльности</span>
            <div>
                <span>0%</span>
                <span>3%</span>
            </div>
            <div>
                slider
            </div>
            <div>
                <span>Персональная скидка</span>
                <span>100%</span>
            </div>
        </div>
        <div class="fifth-block">
            <span class="fifth-block__title">
                Избранное
            </span>
            <div class="fifth-block__list">
                <div class="fifth-block__item">
                    <span class="fifth-block__placeholder"></span>
                    <!-- <img class="fifth-block__item-icon" src="icon" alt="icon"> -->
                </div>
            </div>
        </div>
        <div class="sixth-block">
            <div class="sixth-block__left">
                <router-link to="/login-edit">
                    <span class="sixth-block__left-title">
                        Последний заказ 
                        <iconArrowRight class="icon-arrow" />
                    </span>
                </router-link>
                <span>
                    1 позиция
                </span>
            </div>
            <div class="sixth-block__right">
                <span class="sixth-block__right-title">
                    Статус
                </span>
                <span class="sixth-block__right-data">
                    Отменен
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import iconArrowRight from './../components/icons/iconArrowRight.vue'
import iconAvatar from './icons/iconAvatar.vue'

export default {
    components: {
        iconArrowRight,
        iconAvatar
    },

    data() {
        return {
            userNickname: 'User Nickname'
        }
    }

}
</script>

<style lang="scss">
.vue-sidebar {
    right: 0px;
    top: 5rem;
    width: 20rem;
    height: 85vh;
    background: #141414;
    border-radius: 0.25rem;
    border-left: 2px solid #5a5a5a;
    .first-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 5rem 1rem 1.25rem;
        border-bottom: 1px solid #5a5a5a;
        .first-block__accaunt {
            padding-right: 1rem;
            color: #a7a7a7;
            font-size: 0.875rem;
        }
        .first-block__username {
            &:hover {
                color: #a7a7a7;
                cursor: pointer;
            }
        }
        .icon-arrow {
            width: 1rem;
            height: 1rem;
            fill: #a7a7a7;
        }
        .first-block__avatar-wrapper {
            border: 1px solid #a7a7a7;
            border-radius: 50%;
            padding: 0.5rem;
            cursor: pointer;
        }
        .first-block__name-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
    .second-block {

    }
}
</style>