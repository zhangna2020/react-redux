const user = (state = {}, action) => {
    switch (action.type) {
        case 'add_user':
            state.push('iwen')
            return state;
        default:
            return state;
    }
}

export default user;