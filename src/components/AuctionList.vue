<template lang="">
    <div class="auction-list">
        <auction-row
            v-for="auction in auctions"
            :auction="auction"
            :key="auction.id"
        />
    </div>
</template>

<script>
import AuctionRow from './AuctionRow.vue';
export default {
    props: {
        auctions:{
            type: Array
        }
    },
    components: {
        AuctionRow
    },
    methods: {
    
    }
}
</script>
<style scoped>
    .auction-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>