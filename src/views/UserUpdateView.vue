<template lang="">
    <div>
        <h1 class="form-title">Update user</h1>
        <form class="" @submit.prevent>
            <MyInput :type="'email'" :placeholder="'Email'" v-model="user.email" />
            <MyInput :type="'text'" :placeholder="'Name'" v-model="user.name" />
            <MyInput :type="'Submit'" :value="'Update'" @click="updateUser" />
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MyInput from '@/components/MyInput.vue';
import axios from 'axios';
export default {
    data(){
        return {
            user: {
                id: '',
                email: '',
                password: '',
                name: ''
            }
        }
    },
    mounted() {
        this.getCurrentUser()
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        getCurrentUser(){
            axios.get(`http://localhost:4000/current_user`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {this.user = response.data; console.log(response);})
        },
        updateUser(){
            axios.put(`http://localhost:4000/users/${this.user.id}`, { name: this.user.name, username: this.user.username, email: this.user.email }, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {console.log(response); this.$router.push('/') })
        }
    },
    components: {
        MyInput
    }
}
</script>
<style scoped>
    
</style>