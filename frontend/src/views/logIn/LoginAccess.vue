<template>
    <div>
        <!-- 
            콜백 페이지 이동시 접근 토큰 발급 요청
            요청 후 받아온 정보를 DB에 저장
            DB 저장 후 메인으로 이동 -->
    </div>
</template>
<script>
import { mapActions } from "vuex";
const LogInModule = 'LogInModule'

export default {
    data() {
        return {
            codes: "",
        }
    },
    created() {
        this.create();
    },
    methods: {
        create() {
            this.codes = this.$route.query.code;
            console.log("codes : " + this.codes)
            this.getToken();
            this.$router.push("/")
        },
        async getToken() {
            await this.getTokenToSpring(this.codes)
        },
        ...mapActions(LogInModule, ['getTokenToSpring'])
    },
}
</script>
<style></style>