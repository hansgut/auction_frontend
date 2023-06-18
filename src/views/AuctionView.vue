<template lang="">
    <div class="auction">
        <div class="auction-about">
            <div class="auction-title" style="flex-basis:300px">
                <strong>{{ auction.title }}</strong>
            </div>
            <div style="flex-basis:300px">
                <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" width="200" height="200" alt="" style="object-fit: cover; border-radius: 25px">
            </div>
            <div class="auction-description" style="flex-basis:300px">
                {{ auction.description }}
            </div>
            <div class="auction-by-user">
                by {{ auction.user.username }}
            </div>
            
        </div>
        <div class="auction-bids">
            <div>
                Current price: {{ auction.current_price }} PLN
            </div>
            <form style="margin-top: 20px" @submit.prevent>
                <div>
                    <my-input :type="'number'" :placeholder="'Your price'" style="height: 20px" v-model="newBid.price" />
                </div>
                <div>
                    <my-input :type="'submit'" :value="'Bid!'" @click="createBid" style="height: 27px; width: 170px; cursor: pointer"/>  
                </div> 
            </form>
            <div>
                <div style=" margin-top: 20px; height: 145px; overflow: scroll">
                    <div v-for="bid in auction.bids" :key="bid.id">
                        {{ bid.price }} PLN by {{ bid.user.username }}
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import MyInput from "@/components/MyInput.vue";
export default {
    components: {
        MyInput
    },
    data() {
        return {
            auction: {
                title: '',
                description: '',
                user: {
                    username: ''
                },
                current_price: '',
                bids: [{
                    price: '',
                    user: {
                        username: ''
                    }
                }]
            },
            newBid: {
                price: ''
            }
        }
    },
    mounted() {
        this.getAuction()
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        getAuction() {
            axios.get(`http://localhost:4000/auctions/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {this.auction = response.data; console.log(response);})
        },
        createBid() {
            axios.post(`http://localhost:4000/auctions/${this.$route.params.id}/bids`, { price: this.newBid.price },{ headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {
                console.log(response);
                if (response.status === 201){
                    this.current_price = this.newBid.price;
                    this.auction.bids.unshift(response.data);
                    this.newBid.price = '';
                } else {
                    console.error("BID NOT CREATED");
                }
            })
        }
    },
}
</script>
<style scoped>
    .auction {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 60px);
    }
    .auction-about {
        border: 1px solid black;
        margin-right: 10px;
        height: 300px;
        padding: 10px;
        width: 300px;
        display: flex;
        flex-wrap: wrap;
    }
    .auction-bids {
        border: 1px solid black;
        height: 300px;
        padding: 10px;
    }
    .auction-by-user {
        align-self: flex-end;
        flex-basis: 100%;
    }
</style>