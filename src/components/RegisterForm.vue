<template lang="">
    <div class="login-div">
        <div>
            <h1 class="form-title">Sign in</h1>
            <form class="login-form" @submit.prevent>
                <MyInput :type="'input'" :placeholder="'Name'" v-model="user.name" />
                <MyInput :type="'input'" :placeholder="'Username'" v-model="user.username" />
                <MyInput :type="'email'" :placeholder="'Email'" v-model="user.email" />
                <MyInput :type="'password'" :placeholder="'Password'" v-model="user.password" />
                <MyInput :type="'Submit'" :value="'Register'" @click="registerUser" />
            </form>
        </div>
    </div>
    
</template>

<script>
import MyInput from './MyInput.vue';
import axios from 'axios';
export default {
    components: {
        MyInput
    },
    data() {
        return {
            user: {
                email: '',
                password: '',
                name: '',
                username: '',
            }
        }
    },
    methods: {
        registerUser(){
            axios.post('http://localhost:4000/users',
            {
                email:  this.user.email,
                password: this.user.password,
                name: this.user.name,
                username: this.user.username,
                
            }).then((response)=> {
                if (response.status === 201) {
                    this.$router.push('/login')
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