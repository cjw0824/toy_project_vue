<template lang="">
  <div>
    <v-btn color="rgb(203, 148, 222)" @click="goSignUpPage">회원가입</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    goSignUpPage() {
      this.$router.push({ path: '/sign-up-page' })
    }
  }
}
</script>
<style></style>