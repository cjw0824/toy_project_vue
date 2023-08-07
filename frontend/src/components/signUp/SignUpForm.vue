<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            ID : <input type="text" v-model="userId" placeHolder="아이디"/>
            PW : <input type="password" v-model="userPw" placeHolder="비밀번호"/>
            <v-btn type="submit" color="rgb(203, 148, 222)" @click="clickBtn">가입</v-btn>
        </form>
    </div>
</template>
<script>
// import { mapActions } from 'vuex'
// const SignUpModule = 'SignUpModule'
export default {
    data() {
        return {
            userId: "",
            userPw: ""
        }
    },
    methods: {
        clickBtn() {
            alert("가입되었습니다.")
        },
        onSubmit() {
            const userId = this.userId
            const userPw = this.userPw
            this.$emit("submit", { userId, userPw })
        }
    }
}
</script>
<style></style>