<template>
    <div>
        <v-btn @click="naverLogin" color="green">NAVER</v-btn>
        <!-- <img :src="require('@/assets/logo.png')" /> -->
    </div>
</template>
<script>
import { mapActions } from "vuex";
const LogInModule = 'LogInModule'
export default {
    methods: {
        ...mapActions(LogInModule, ['requestNaverLoginToSpring']),
        naverLogin() {
            this.requestNaverLoginToSpring()
        }
    }
}
</script>
<style></style>