<template>
    <div class="login-edit">
        <vs-row>
            <vs-col vs-offset="3" >
                <h2 class="login-edit__title">
                    Клубный аккаунт
                </h2>
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-w="3">
                <div class="menu">
                    <span 
                        v-for="(item, index) in menu" 
                        :key="index" 
                        @click="changeMenu(index+1)"
                        class="menu__item">
                        {{ item.title }}
                    </span>
                </div>
            </vs-col>
            <vs-col vs-w="9">
                <div v-if="currentMenu === 1" class="login-edit__main-item">
                    <label for="">Ник</label>
                    <input class="login-edit__input" type="text">
                    <label for="">Email</label>
                    <input class="login-edit__input" type="text">
                    <label for="">Имя</label>
                    <input class="login-edit__input" type="text">
                    <label for="">Фамилия</label>
                    <input class="login-edit__input" type="text">
                    <label for="">Телефон</label>
                    <input class="login-edit__input" type="text">
                    <label for="">Дата рождения</label>
                    <input class="login-edit__input" type="text">
                    <label for=""></label>
                    <input class="login-edit__input" type="text">
                </div>
                <div v-if="currentMenu === 2" class="login-edit__main-item">
                    <label for="">Нынешний пароль</label>
                    <input class="login-edit__input" type="password">
                    <label for="">Новый пароль</label>
                    <input class="login-edit__input" type="password">
                    <label for="">Повторите новый парль</label>
                    <input class="login-edit__input" type="password">
                </div>
                <div v-if="currentMenu === 3" class="login-edit__main-item">
                    <label for=""></label>
                    <input class="login-edit__input" type="text">
                    <label for=""></label>
                    <input class="login-edit__input" type="text">
                    <label for=""></label>
                    <input class="login-edit__input" type="text">
                    <label for=""></label>
                    <input class="login-edit__input" type="text">
                    <label for=""></label>
                    <input class="login-edit__input" type="text">
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
    name: 'loginEdit',

    data() {
        return {
            menu: [
                {
                    title: 'Основные данные',
                    type: 1
                },
                {
                    title: 'Сменить пароль',
                    type: 2
                },
                {
                    title: '3',
                    type: 3
                },
            ],
            currentMenu: 1
        }
    },

    methods: {
        changeMenu(index) {
            this.currentMenu = index
        }
    }
}
</script>

<style lang="scss">
.login-edit {
    .login-edit__title {
        font-size: 2rem;
        font-weight: 600;
        text-align: left;
        padding: 2rem 0 0.5rem;
        width: fit-content;
        border-bottom: 3px solid white;
        margin-bottom: 3rem;
    }
    .login-edit__main-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .login-edit__input {
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
    .menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 9rem;
        .menu__item {
            display: inline-block;
            cursor: pointer;
            padding: 0.25rem;
            min-width: 5rem;
            text-align: left;
            &:hover {
                color: gray
            }
        }
    }
}
</style>