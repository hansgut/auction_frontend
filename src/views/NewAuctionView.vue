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
                <my-input :type="'number'" :placeholder="'Starting price'" v-model="auction.startingPrice" />
            </div>
            <div>
                <div>
                    <label for="endDate">End date:</label>
                </div>
                <div>
                    <my-input :type="'datetime-local'" :placeholder="'end date'" v-model="auction.endDate" />
                </div>
            </div>
            <div>
                <my-input :type="'Submit'" :value="'Save'" @click="createAuction"/>
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
                startingPrice: '',
                endDate: '',
                description: ''
            }
        }
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        createAuction(){
            axios.post(`http://localhost:4000/auctions`, { title: this.auction.title, starting_price: this.auction.startingPrice, end_date: this.auction.endDate, description: this.auction.description }, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
                .then((response) => {console.log(response); this.$router.push(`/auctions/${response.data.id}`)})
        }
    },
    
}
</script>
<style lang="">
</style>