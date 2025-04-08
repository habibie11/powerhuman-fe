export const state = () => ({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    role_id: '',
    role_name: '',
    team_id: '',
})

export const mutations = {
    updateName(state, payload) {
        state.name = payload
    },
    updateEmail(state, payload) {
        state.email = payload
    },
    updatePhone(state, payload) {
        state.phone = payload
    },
    updateAge(state, payload) {
        state.age = payload
    },
    updateGender(state, payload) {
        state.gender = payload
    },
    updateRoleId(state, payload) {
        state.role_id = payload
    },
    updateRoleName(state, payload) {
        state.role_name = payload
    },
    updateTeamId(state, payload) {
        state.team_id = payload
    },
    clearEmployee(state) {
        state.name = '';
        state.email = '';
        state.phone = '';
        state.age = '';
        state.gender = '';
        state.role_id = '';
        state.role_name = '';
        state.team_id = '';
    }
}