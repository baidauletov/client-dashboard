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
                        <iconArrowRight class="icon-arrow" />
                    </router-link>
                </span>
                <span>
                    {{ userNickname }}
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
    border-left: 1px solid #a7a7a7;
    .first-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem 1rem 1.25rem;
        border-bottom: 1px solid #a7a7a7;
        .icon-arrow {
            width: 1rem;
            height: 1rem;
            fill: white
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
            align-items: flex-end;
        }
    }
}
</style>