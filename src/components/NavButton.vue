<template lang="">
    <button class="btn"><slot></slot></button>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .btn {
        border: 2px solid black;
        border-radius: 25px;
        font-size: larger;
        background-color: white;
        margin: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>