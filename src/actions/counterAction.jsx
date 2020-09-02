export function increment(num) {
    return {
        type: 'increment',
        num: num
    }
}
export function decrement(num) {
    return {
        type: 'decrement',
        num
    }
}