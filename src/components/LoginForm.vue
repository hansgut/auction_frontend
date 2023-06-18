<template lang="">
    <div class="login-div">
        <div>
            <h1 class="form-title">Sign in</h1>
            <form class="login-form" @submit.prevent>
                <MyInput :type="'email'" :placeholder="'Email'" v-model="user.email" />
                <MyInput :type="'password'" :placeholder="'Password'" v-model="user.password" />
                <MyInput :type="'Submit'" :value="'Log In'" @click="authUser" />
            </form>
        </div>
    </div>
    
</template>

<script>
import MyInput from './MyInput.vue';
import axios from 'axios';
import { mapMutations, mapGetters } from 'vuex';
export default {
    components: {
        MyInput
    },
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapMutations({
            setAuthToken: 'setAuthToken'
        }),
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        authUser(){
            axios.post('http://localhost:4000/auth/login',
            {
                email:  this.user.email,
                password: this.user.password
                
            }).then((response)=> {
                if (response.status === 200) {
                    this.setAuthToken(response.data.token);
                    this.$router.push('/')
                } else {
                    console.log(response);
                }
            })
        }
    }
}
</script>
<style scoped>
    .login-div {
        height: calc(100vh - 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 100%;
        flex-wrap: wrap;
    }
    .login-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .form-title {
        flex-basis: 100%;
        margin-bottom: 15px;
    }
</style>