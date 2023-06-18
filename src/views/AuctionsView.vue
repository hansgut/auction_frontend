<template lang="">
    <div>
        <auction-list
            :auctions="auctions"
        />
    </div>
</template>

<script>
import axios from "axios"
import { mapGetters } from "vuex";
import AuctionList from "@/components/AuctionList.vue";
export default {
    data(){
        return {
            auctions: []
        }
    },
    mounted() {
        this.fetchAuctions();
    },
    components: {
        AuctionList
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        }),
        fetchAuctions(){
            axios.get("http://localhost:4000/auctions", { headers: {"Authorization" : `Bearer ${this.getAuthToken()}`} })
            .then((response) => {
                this.auctions = response.data;
            })
        }
    }
}
</script>
<style scoped>
    
</style>