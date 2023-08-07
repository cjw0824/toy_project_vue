import state from '@/store/signUp/states'
import actions from '@/store/signUp/actions'
import mutations from '@/store/signUp/mutations'

const SignUpModule = {
    namespaced: true,
    // 만들어준 스토어를 다른데서 사용가능하게한다.
    state,
    actions,
    mutations,
}
export default SignUpModule