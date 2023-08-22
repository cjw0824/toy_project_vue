<template lang="">
    <div>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <!-- <v-form @submit.prevent="onSubmit"> -->
            <v-form>
                    <v-text-field type="text" v-model="userId" placeHolder="아이디"/>
                    <v-text-field type="password" v-model="userPw" placeHolder="비밀번호"/>
                    <v-text-field type="password" placeHolder="비밀번호 확인"/>
                    <v-text-field type="tel" v-model="tel" placeHolder="전화번호"/>

                    <v-btn type="button" color="rgb(203, 148, 222)" @click="onSubmit">가입</v-btn>
            </v-form>
        </v-card>
    </div>
</template>
<script>
// import { mapActions } from 'vuex'
// const SignUpModule = 'SignUpModule'
export default {
    data() {
        return {
            userId: "",
            userPw: "",
            tel: ""
        }
    },
    methods: {
        // clickBtn() {
        //     alert("가입되었습니다.")
        // },
        onSubmit() {
            const userId = this.userId
            const userPw = this.userPw
            const tel = this.tel
            this.$emit("submit", { userId, userPw, tel })
        }
    }
}
</script>
<style></style>