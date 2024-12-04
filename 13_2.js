function C(n, k){
    if (k === 0) {
        return 1
    }
    if (k > n){
        return 0
    }
    else {
        return C(n - 1, k) + C(n - 1, k - 1)
    }
}

let n = Number(prompt('n ', 0))
let k = Number(prompt('k ', 0))

console.log(C(n, k))