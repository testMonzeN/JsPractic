function check(n){
    if (n === 2) { return true}
    if (n <= 1) { return false}
    if (n % 2 === 0) { return false}

    let firstNum = 3
    while (firstNum <= n ** 0.5) {
        if (n % firstNum === 0) {return false}
        firstNum += 2
    }
    return true
}

function primes() {
    let arr = []
    let num = 1

    while (true){
        num += 1
        if (check(num)){
            arr.push(num)
            console.log(arr)
        }
    }
}
primes()