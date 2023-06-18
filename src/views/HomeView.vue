<template lang="">
    <div>
        <div>
            <h2>My profile</h2>
            <div style="margin: 10px">
                <h4>Name: {{ user.name }}</h4>
                <h4>Email: {{ user.email }}</h4>
                <h4>Username: {{ user.username }}</h4>
                <my-input :type="'Submit'" :value="'Update'" @click="$router.push('/user_update')"/>
                <my-input :type="'Submit'" :value="'Delete'" @click="deleteUser"/>
            </div>
        </div>
        <div>
            <h2>My auctions</h2>
            <my-input :type="'Submit'" :value="'New auction'" @click="$router.push('/auctions/new')"/>
            <auction-list
                :auctions="auctions"
            />
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import AuctionList from "@/components/AuctionList.vue";
import MyInput from "@/components/MyInput.vue";
export default {
    data(){
        return {
            auctions: [],
            user: {
                username: '',
                name: '',
                email: ''
            }
        }
    },
    components: {
        AuctionList,
        MyInput
    },
    mounted(){
        this.getUserAuction();
        this.getCurrentUser();
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        getUserAuction(){
            axios.get(`http://localhost:4000/current_user_auctions`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {this.auctions = response.data; console.log(response);})
        },
        getCurrentUser(){
            axios.get(`http://localhost:4000/current_user`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {this.user = response.data; console.log(response);})
        },
        deleteUser(){
            if(confirm("Are you sure?") == true) {
                axios.delete(`http://localhost:4000/current_user`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
                .then((response) => {this.user = response.data; console.log(response);})
            }
        }
        
    },
}
</script>
<style lang="">
</style>