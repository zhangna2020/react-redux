const counter = (state = 0, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.num;
        case 'decrement':
            return state - action.num;
        default:
            return state;
    }
}

export default counter