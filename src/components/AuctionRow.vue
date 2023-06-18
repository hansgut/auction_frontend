<template lang="">
    <div class="auction-row">
        <div class="auction-row-2" @click="$router.push(`/auctions/${auction.id}`)">
            <div class="auction-title">
                <strong>{{ auction.title }}</strong>
            </div>
            <div class="auction-timer">
                
            </div>
        
        </div>
        <div>
            <my-input v-if="this.$route.path === '/'" :type="'Submit'" :value="'Update'" @click="$router.push(`/auctions/${auction.id}/edit`)"/>
            <my-input v-if="this.$route.path === '/'" :type="'Submit'" :value="'Delete'" @click="deleteAuction(auction.id)"/>
        </div>
    </div>
    
    
    
</template>

<script>
import axios from "axios";
import MyInput from "@/components/MyInput.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        MyInput
    },
    props: {
        auction: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.$route.path === '/');
        this.auctionTimerSet(this.$el.querySelector('.auction-timer'))
    },
    methods: {
        auctionTimerSet(el) {
            // Set the date we're counting down to
            let countDownDate = new Date(this.auction.end_date).getTime();

            // Update the count down every 1 second
            let x = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();
                
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            el.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
            }, 1000);
        },
        deleteAuction(id){
            if(confirm("Are you sure?") == true){
                axios.delete(`http://localhost:4000/auctions/${id}`, { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
                .then((response) => {console.log(response); location.reload();})
            }
        },
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
    }
}
</script>
<style scoped>
    .auction-row {
        border: 1px solid black;
        margin: 10px;
        display: flex;
        flex-basis: 50%;
        height: 50px;
        padding: 10px;
        align-items: center;
        cursor: pointer;
        justify-content: space-between;
    }
    .auction-row-2{
        display: flex;
        flex-basis: 50%;
        justify-content: space-between;
    }
</style>