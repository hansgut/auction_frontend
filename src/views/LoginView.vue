<template lang="">
    <div>
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        LoginForm
    },
    methods: {
        ...mapGetters({
            getAuthToken: 'getAuthToken'
        })
    }
}
</script>
<style scoped>
    
</style>