<template lang="">
    <nav>
        <nav-button v-if="getAuthToken() !== null" @click="$router.push('/')" >User</nav-button>
        <nav-button v-if="getAuthToken() !== null" @click="$router.push('/auctions')">Auctions</nav-button>
        <nav-button v-if="getAuthToken() === null" @click="$router.push('/login')">Login</nav-button>
        <nav-button v-if="getAuthToken() === null" @click="$router.push('/register')">Register</nav-button>
        <nav-button v-else @click="logoutUser">Log out</nav-button>
    </nav>
</template>

<script>
import NavButton from './NavButton.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        NavButton
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        ...mapActions({
            logout: 'logout'
        }),
        logoutUser(){
            this.logout()
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
    nav {
        height: 60px;
        background: gray;
        display: flex;
        justify-content: flex-end;
    }
</style>