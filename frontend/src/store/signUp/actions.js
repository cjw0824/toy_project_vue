import axiosInst from '@/utility/axiosInst'

export default {
    requestSignUpToSpring(context, payload) {
        const {userId, userPw} = payload
        return axiosInst.post('/', {userId, userPw})
        .then(() => {alert("성공")})
        .catch(() => alert("실패"))
    }
}

// actions => 서버에서 데이터를 가져와서 수정하고 싶을 때