<template lang="">
    <input class="my-input" :type="type" :placeholder="placeholder" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        },
        modelValue: [String]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
    .my-input{
        height: 40px;
        margin: 10px;
        flex: 40%;
        border-radius: 25px;
        text-align: center;
        font-size: medium;
    }
</style>