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
                    <label class="login-edit__label" for="">Имя пользователя</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Email</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Имя</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Фамилия</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Номер телефон</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Адрес</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Пол</label>
                    <input class="login-edit__input" type="text">
                    <label class="login-edit__label" for="">Дата рождения</label>
                    <input class="login-edit__input" type="text">
                    <button class="login-edit__button">
                        Сохранить
                    </button>
                </div>
                <div v-if="currentMenu === 2" class="login-edit__main-item">
                    <label class="login-edit__label" for="">Текущий пароль</label>
                    <input class="login-edit__input" type="password">
                    <label class="login-edit__label" for="">Новый пароль</label>
                    <input class="login-edit__input" type="password">
                    <label class="login-edit__label" for="">Подтвердить новый пароль</label>
                    <input class="login-edit__input" type="password">
                    <button class="login-edit__button">
                        Сохранить
                    </button>
                </div>
                <div v-if="currentMenu === 3" class="login-edit__main-item">
                    <div class="login-edit__list">
                        <div class="login-edit__list-header">
                            <span class="login-edit__list-header-first-item">Дата транзакции</span>
                            <span class="login-edit__list-header-second-item">Описание</span>
                            <span class="login-edit__list-header-third-item">Сумма Баланс, KZT</span>
                        </div>
                        <div v-for="(item, index) of transactions" :key="index" class="login-edit__list-item">
                            <div class="login-edit__list-item-when">
                                <span class="login-edit__list-item-time">{{ item.time }}</span>
                                <span class="login-edit__list-item-date">{{ item.date }}</span>
                            </div>
                            <div class="login-edit__list-item-content">
                                <span class="login-edit__list-item-descrition">{{ item.title }}</span>
                                <span class="login-edit__list-item-tarif">{{ item.tarif }}</span>
                            </div>
                            <div class="login-edit__list-item-bottom">
                                <span class="login-edit__list-item-cash-top">{{ item.ticket }}</span>
                                <span class="login-edit__list-item-cash-bottom">{{ item.balans }}</span>
                            </div>
                        </div>
                    </div>
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
                    title: 'Профиль',
                    type: 1
                },
                {
                    title: 'Сменить пароль',
                    type: 2
                },
                {
                    title: 'История баланса',
                    type: 3
                },
            ],
            currentMenu: 1,
            transactions: [
                {
                    time: '20.15',
                    date: '2.12.12',
                    title: 'Сессия по тарифу',
                    tarif: 'Тариф 600.00 KZT/час',
                    ticket: '- 0.00',
                    balans: '80.43'
                },
                {
                    time: '20.15',
                    date: '2.12.12',
                    title: 'Сессия по тарифу',
                    tarif: 'Тариф 600.00 KZT/час',
                    ticket: '- 0.00',
                    balans: '80.43'
                },
                {
                    time: '20.15',
                    date: '2.12.12',
                    title: 'Сессия по тарифу',
                    tarif: 'Тариф 600.00 KZT/час',
                    ticket: '- 0.00',
                    balans: '80.43'
                },
                {
                    time: '20.15',
                    date: '2.12.12',
                    title: 'Сессия по тарифу',
                    tarif: 'Тариф 600.00 KZT/час',
                    ticket: '- 0.00',
                    balans: '80.43'
                },
                {
                    time: '20.15',
                    date: '2.12.12',
                    title: 'Сессия по тарифу',
                    tarif: 'Тариф 600.00 KZT/час',
                    ticket: '- 0.00',
                    balans: '80.43'
                },    
            ]
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
    .login-edit__label {
        font-size: 0.875rem;
        color: #a7a7a7;
    }
    .login-edit__input {
        background: #21201f;
        border-radius: 0.25rem;
        border: 1px solid #21201f;
        color: white;
        padding: 0.5rem 0.75rem;
        font-size: 1.125rem;
        font-weight: 500;
        width: 35rem;
        margin-bottom: 1rem;
        &:hover {
            border: 1px solid white;
        }
    }
    .login-edit__button {
        padding: 1rem 1.5rem;
        background: #5a5a5a;
        color: #a7a7a7;
        border: none;
        border-radius: 0.25rem;
        margin-top: 3rem;
        &:hover {
            opacity: 0.8;
        }
    }
    .login-edit__list {
        width: 80%;
        .login-edit__list-header {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;
            .login-edit__list-header-first-item {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .login-edit__list-header-second-item {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
            .login-edit__list-header-third-item {
                font-size: 0.875rem;
                color: #a7a7a7;
            }
        }
        .login-edit__list-item {   
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #a7a7a7; 
            padding: 1rem 0.5rem;
            .login-edit__list-item-when {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .login-edit__list-item-time {

                }
                .login-edit__list-item-date {

                }
            }
            .login-edit__list-item-content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .login-edit__list-item-descrition {

                }
                .login-edit__list-item-tarif {
                    color: #a7a7a7;
                }
            }
            .login-edit__list-item-bottom {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .login-edit__list-item-cash-top {
                    color: red;
                }
                .login-edit__list-item-cash-bottom {

                }
            }
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
            padding-bottom: 1rem;
            min-width: 5rem;
            text-align: left;
            &:hover {
                color: gray
            }
        }
    }
}
</style>