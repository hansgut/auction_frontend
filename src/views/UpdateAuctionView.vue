<template lang="">
    <div>
        <form @submit.prevent>
            <div>
                <my-input :type="'text'" :placeholder="'Title'" v-model="auction.title" />
            </div>
            <div>
                <h4>Description</h4>
                <textarea v-model="auction.description"></textarea>
            </div>
            <div>
                <my-input :type="'number'" :placeholder="'Starting price'" v-model="auction.starting_price" />
            </div>
            <div>
                <div>
                    <label for="endDate">End date:</label>
                </div>
                <div>
                    <my-input :type="'datetime-local'" :placeholder="'end date'" v-model="auction.end_date" />
                </div>
            </div>
            <div>
                <my-input :type="'Submit'" :value="'Save'" @click="updateAuction"/>
            </div>
        </form>
    </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    components: {
        MyInput
    },
    data() {
        return {
            auction: {
                title: '',
                starting_price: '',
                end_date: '',
                description: ''
            }
        }
    },
    mounted(){
        this.getAuction()
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        getAuction(){
            axios.get(`http://localhost:4000/auctions/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => { this.auction = response.data; console.log(response.data) })
        },
        updateAuction(){
            axios.patch(`http://localhost:4000/auctions/${this.$route.params.id}`, { title: this.auction.title, starting_price: this.auction.starting_price, end_date: this.auction.end_date, description: this.auction.description }, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
                .then((response) => {console.log(response); this.$router.push(`/auctions/${response.data.id}`)})
        }
    },
    
}
</script>
<style lang="">
</style>