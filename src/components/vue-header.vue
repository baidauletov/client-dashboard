<template>
  <div class="header">
    <div class="header__item logo d-flex justify-content-start">
        <img src="./../../public/default-logo.png" alt="logo" class="header__logo">
    </div>
    <div class="header__item d-flex align-items-center">
        <span 
            v-for="(item, index) in menu" 
            :key="index"
            class="header__menu-item">
            {{ item.title }}
        </span>
    </div>
    <div class="header__item d-flex align-items-center">
        <input type="text" class="search-block" placeholder="...">
    </div>
    <div class="header__item status d-flex align-items-center justify-content-between">
        <div class="status-block">
            <div class="d-flex align-items-center">
                <span class="h-100">
                    <iconMonitor class="header__icon" />
                </span>
                <span class="status-block__comp-number h-100 px-2">
                    {{ comp_number }}
                </span>
            </div>
            <div class="d-flex align-items-center px-2">
                <span class="status-color" :style="{background: statusColors[currentColor]}"></span>
                <span class="status-block__hall">{{ currentHall }}</span>
            </div>
        </div>
        <div class="px-3">
            <button class="header__button">
                <iconLock class="header__icon" />
            </button>
            <button class="header__button">
                <iconExit class="header__icon" />
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import iconMonitor from './icons/iconMonitor.vue'
import iconLock from './icons/iconLock.vue'
import iconExit from './icons/iconExit.vue'

export default {
    name: 'vue-header',

    components: {
        iconMonitor,
        iconLock,
        iconExit,
    },

    data() {
        return {
            menu: [
                {
                    title: 'Игры и приложения'
                },
                {
                    title: 'Мои абонементы'
                },
                {
                    title: 'Магазин'
                },
                {
                    title: 'Файлы'
                }
            ],
            comp_number: 45,
            currentColor: 'green',
            currentHall: 'Общий зал',
            statusColors: {
                green: 'green',
                red: 'red'
            }
        }
    }
}
</script>

<style lang="scss">
.header {
    background: rgb(17, 18, 27);
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    .logo {
        width: 10rem;
        height: 5.5rem;
    }
    .header__logo {
        width: 8rem;
        height: 5.5rem;
        object-fit: cover;
        cursor: pointer;
    }
    .header__button {
        background: rgb(56, 56, 56);
        width: 2.75rem;
        height: 2.75rem;
        border: 1px solid rgb(54, 54, 54);
        border-radius: 50%;
        cursor: pointer;
        margin-right: 0.5rem;
    }
    .header__icon {
        background: inherit;
        width: 1.5rem;
        height: 1.5rem;
        &:hover {
            fill: rgb(202, 200, 200);
            g {
                stroke: rgb(202, 200, 200);
            }
        }
    }
    .header__menu-item {
        font-size: 1.375rem;
        text-transform: uppercase;
        padding-right: 1.5rem;
        cursor: pointer;
        &:hover {
            color: rgb(175, 175, 175);
        }
    }
    .search-block {
        background: #5a5a5a;
        border-radius: 0.25rem;
        border: 1px solid #5a5a5a;
        color: white;
        padding: 0.25rem 0.75rem;
        font-size: 1rem;
        font-weight: 500;
        &:hover {
            border: 1px solid white;
        }
    }
    .status {
        width: 20rem;
        border-left: 2px solid #5a5a5a;
        padding-left: 1rem;
    }
    .status-color {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
    }
    .status-block__hall {
        text-transform: lowercase;
        padding-left: 0.75rem;
    }
}
</style>