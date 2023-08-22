import state from '@/store/logIn/states'
import actions from '@/store/logIn/actions'
import mutations from '@/store/logIn/mutations'

const LogInModule = {
    namespaced: true,
    // 만들어준 스토어를 다른데서 사용가능하게한다.
    state,
    actions,
    mutations,
}
export default LogInModule