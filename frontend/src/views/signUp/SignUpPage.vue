<template lang="">
    <div>
        <SignUpForm @submit="onSubmit"/>
    </div>
</template>
<script>
import SignUpForm from '@/components/signUp/SignUpForm.vue';
import { mapActions } from 'vuex';

const SignUpModule = 'SignUpModule'

export default {
    components: {
        SignUpForm,
    },
    methods: {
        ...mapActions(SignUpModule, ['requestSignUpToSpring']),
        async onSubmit(payload) {
            await this.requestSignUpToSpring(payload)
        }
    }
}
</script>
<style></style>